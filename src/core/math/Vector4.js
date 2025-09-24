import { clamp } from './MathUtils.js';

/**
 * Class representing a 4D vector (x, y, z, w).
 * Can represent points, directions, or arbitrary quadruplets in 4D space.
 */
class Vector4 {

	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		// Type flag
		this.isVector4 = true;
	}

	// Aliases
	get width() { return this.z; }
	set width(value) { this.z = value; }

	get height() { return this.w; }
	set height(value) { this.w = value; }

	// Setters
	set(x, y, z, w) {
		this.x = x; this.y = y; this.z = z; this.w = w;
		return this;
	}

	setScalar(scalar) { return this.set(scalar, scalar, scalar, scalar); }
	setX(x) { this.x = x; return this; }
	setY(y) { this.y = y; return this; }
	setZ(z) { this.z = z; return this; }
	setW(w) { this.w = w; return this; }

	setComponent(index, value) {
		switch (index) {
			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error('Index out of range: ' + index);
		}
		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error('Index out of range: ' + index);
		}
	}

	// Clone / copy
	clone() { return new Vector4(this.x, this.y, this.z, this.w); }
	copy(v) { 
		this.x = v.x; this.y = v.y; this.z = v.z; 
		this.w = (v.w !== undefined) ? v.w : 1;
		return this;
	}

	// Arithmetic
	add(v) { this.x += v.x; this.y += v.y; this.z += v.z; this.w += v.w; return this; }
	addScalar(s) { this.x += s; this.y += s; this.z += s; this.w += s; return this; }
	addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; this.w = a.w + b.w; return this; }
	addScaledVector(v, s) { this.x += v.x * s; this.y += v.y * s; this.z += v.z * s; this.w += v.w * s; return this; }

	sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; this.w -= v.w; return this; }
	subScalar(s) { this.x -= s; this.y -= s; this.z -= s; this.w -= s; return this; }
	subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; this.w = a.w - b.w; return this; }

	multiply(v) { this.x *= v.x; this.y *= v.y; this.z *= v.z; this.w *= v.w; return this; }
	multiplyScalar(s) { this.x *= s; this.y *= s; this.z *= s; this.w *= s; return this; }
	divide(v) { this.x /= v.x; this.y /= v.y; this.z /= v.z; this.w /= v.w; return this; }
	divideScalar(scalar) { return this.multiplyScalar(1 / scalar); }

	// Apply matrix
	applyMatrix4(m) {
		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
		this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
		this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
		this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;

		return this;
	}

	// Axis-angle / quaternion
	setAxisAngleFromQuaternion(q) {
		this.w = 2 * Math.acos(q.w);
		const s = Math.sqrt(1 - q.w * q.w);

		if (s < 0.0001) {
			this.x = 1; this.y = 0; this.z = 0;
		} else {
			this.x = q.x / s; this.y = q.y / s; this.z = q.z / s;
		}

		return this;
	}

	setAxisAngleFromRotationMatrix(m) {
		const te = m.elements;
		const m11 = te[0], m12 = te[4], m13 = te[8];
		const m21 = te[1], m22 = te[5], m23 = te[9];
		const m31 = te[2], m32 = te[6], m33 = te[10];

		const epsilon = 0.01, epsilon2 = 0.1;

		if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
			// singularity
			if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
				this.set(1, 0, 0, 0);
				return this;
			}

			const angle = Math.PI;
			let x, y, z;
			const xx = (m11 + 1) / 2, yy = (m22 + 1) / 2, zz = (m33 + 1) / 2;
			const xy = (m12 + m21) / 4, xz = (m13 + m31) / 4, yz = (m23 + m32) / 4;

			if (xx > yy && xx > zz) { x = Math.sqrt(xx); y = xy / x; z = xz / x; }
			else if (yy > zz) { y = Math.sqrt(yy); x = xy / y; z = yz / y; }
			else { z = Math.sqrt(zz); x = xz / z; y = yz / z; }

			this.set(x, y, z, angle);
			return this;
		}

		let s = Math.sqrt((m32 - m23) ** 2 + (m13 - m31) ** 2 + (m21 - m12) ** 2);
		if (Math.abs(s) < 0.001) s = 1;

		this.x = (m32 - m23) / s;
		this.y = (m13 - m31) / s;
		this.z = (m21 - m12) / s;
		this.w = Math.acos((m11 + m22 + m33 - 1) / 2);

		return this;
	}

	setFromMatrixPosition(m) {
		const e = m.elements;
		this.x = e[12]; this.y = e[13]; this.z = e[14]; this.w = e[15];
		return this;
	}

	// Min / max / clamp
	min(v) { this.x = Math.min(this.x, v.x); this.y = Math.min(this.y, v.y); this.z = Math.min(this.z, v.z); this.w = Math.min(this.w, v.w); return this; }
	max(v) { this.x = Math.max(this.x, v.x); this.y = Math.max(this.y, v.y); this.z = Math.max(this.z, v.z); this.w = Math.max(this.w, v.w); return this; }
	clamp(minV, maxV) { this.x = clamp(this.x, minV.x, maxV.x); this.y = clamp(this.y, minV.y, maxV.y); this.z = clamp(this.z, minV.z, maxV.z); this.w = clamp(this.w, minV.w, maxV.w); return this; }
	clampScalar(minVal, maxVal) { this.x = clamp(this.x, minVal, maxVal); this.y = clamp(this.y, minVal, maxVal); this.z = clamp(this.z, minVal, maxVal); this.w = clamp(this.w, minVal, maxVal); return this; }
	clampLength(min, max) { const len = this.length(); return this.divideScalar(len || 1).multiplyScalar(clamp(len, min, max)); }

	// Rounding
	floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); this.w = Math.floor(this.w); return this; }
	ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); this.w = Math.ceil(this.w); return this; }
	round() { this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z); this.w = Math.round(this.w); return this; }
	roundToZero() { this.x = Math.trunc(this.x); this.y = Math.trunc(this.y); this.z = Math.trunc(this.z); this.w = Math.trunc(this.w); return this; }

	// Other operations
	negate() { this.x = -this.x; this.y = -this.y; this.z = -this.z; this.w = -this.w; return this; }
	dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w; }

	// Length
	lengthSq() { return this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2; }
	length() { return Math.sqrt(this.lengthSq()); }
	manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); }
	normalize() { return this.divideScalar(this.length() || 1); }
	setLength(length) { return this.normalize().multiplyScalar(length); }

	// Interpolation
	lerp(v, alpha) { this.x += (v.x - this.x) * alpha; this.y += (v.y - this.y) * alpha; this.z += (v.z - this.z) * alpha; this.w += (v.w - this.w) * alpha; return this; }
	lerpVectors(v1, v2, alpha) { this.x = v1.x + (v2.x - v1.x) * alpha; this.y = v1.y + (v2.y - v1.y) * alpha; this.z = v1.z + (v2.z - v1.z) * alpha; this.w = v1.w + (v2.w - v1.w) * alpha; return this; }

	equals(v) { return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w; }

	// Array / buffer
	fromArray(array, offset = 0) { this.x = array[offset]; this.y = array[offset + 1]; this.z = array[offset + 2]; this.w = array[offset + 3]; return this; }
	toArray(array = [], offset = 0) { array[offset] = this.x; array[offset + 1] = this.y; array[offset + 2] = this.z; array[offset + 3] = this.w; return array; }
	fromBufferAttribute(attribute, index) { this.x = attribute.getX(index); this.y = attribute.getY(index); this.z = attribute.getZ(index); this.w = attribute.getW(index); return this; }

	random() { this.x = Math.random(); this.y = Math.random(); this.z = Math.random(); this.w = Math.random(); return this; }

	// Iterator
	*[Symbol.iterator]() { yield this.x; yield this.y; yield this.z; yield this.w; }
}

export { Vector4 };
