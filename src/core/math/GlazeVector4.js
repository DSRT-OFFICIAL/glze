import { clamp } from './MathUtils.js';

class GlazeVector4 {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		this.isVector4 = true; // Type flag
	}

	get width() { return this.z; }
	set width(value) { this.z = value; }
	get height() { return this.w; }
	set height(value) { this.w = value; }

	set(x, y, z, w) { this.x = x; this.y = y; this.z = z; this.w = w; return this; }
	setScalar(s) { return this.set(s, s, s, s); }
	setX(x) { this.x = x; return this; }
	setY(y) { this.y = y; return this; }
	setZ(z) { this.z = z; return this; }
	setW(w) { this.w = w; return this; }

	setComponent(i, v) { switch(i){case 0:this.x=v;break;case 1:this.y=v;break;case 2:this.z=v;break;case 3:this.w=v;break;default:throw new Error('Index out of range: '+i);}return this; }
	getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error('Index out of range: '+i);} }

	clone() { return new GlazeVector4(this.x, this.y, this.z, this.w); }
	copy(v) { this.x=v.x; this.y=v.y; this.z=v.z; this.w=(v.w!==undefined?v.w:1); return this; }

	add(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;this.w+=v.w;return this;}
	addScalar(s){this.x+=s;this.y+=s;this.z+=s;this.w+=s;return this;}
	addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this;}
	addScaledVector(v,s){this.x+=v.x*s;this.y+=v.y*s;this.z+=v.z*s;this.w+=v.w*s;return this;}

	sub(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;this.w-=v.w;return this;}
	subScalar(s){this.x-=s;this.y-=s;this.z-=s;this.w-=s;return this;}
	subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this;}

	multiply(v){this.x*=v.x;this.y*=v.y;this.z*=v.z;this.w*=v.w;return this;}
	multiplyScalar(s){this.x*=s;this.y*=s;this.z*=s;this.w*=s;return this;}
	divide(v){this.x/=v.x;this.y/=v.y;this.z/=v.z;this.w/=v.w;return this;}
	divideScalar(s){return this.multiplyScalar(1/s);}

	applyMatrix4(m){const x=this.x,y=this.y,z=this.z,w=this.w,e=m.elements;this.x=e[0]*x+e[4]*y+e[8]*z+e[12]*w;this.y=e[1]*x+e[5]*y+e[9]*z+e[13]*w;this.z=e[2]*x+e[6]*y+e[10]*z+e[14]*w;this.w=e[3]*x+e[7]*y+e[11]*z+e[15]*w;return this;}

	setAxisAngleFromQuaternion(q){this.w=2*Math.acos(q.w);const s=Math.sqrt(1-q.w*q.w);if(s<0.0001){this.x=1;this.y=0;this.z=0;}else{this.x=q.x/s;this.y=q.y/s;this.z=q.z/s;}return this;}

	setFromMatrixPosition(m){const e=m.elements;this.x=e[12];this.y=e[13];this.z=e[14];this.w=e[15];return this;}

	min(v){this.x=Math.min(this.x,v.x);this.y=Math.min(this.y,v.y);this.z=Math.min(this.z,v.z);this.w=Math.min(this.w,v.w);return this;}
	max(v){this.x=Math.max(this.x,v.x);this.y=Math.max(this.y,v.y);this.z=Math.max(this.z,v.z);this.w=Math.max(this.w,v.w);return this;}
	clamp(minV,maxV){this.x=clamp(this.x,minV.x,maxV.x);this.y=clamp(this.y,minV.y,maxV.y);this.z=clamp(this.z,minV.z,maxV.z);this.w=clamp(this.w,minV.w,maxV.w);return this;}
	clampScalar(min,max){this.x=clamp(this.x,min,max);this.y=clamp(this.y,min,max);this.z=clamp(this.z,min,max);this.w=clamp(this.w,min,max);return this;}

	floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this;}
	ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this;}
	round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this;}
	roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);this.z=Math.trunc(this.z);this.w=Math.trunc(this.w);return this;}

	negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this;}
	dot(v){return this.x*v.x+this.y*v.y+this.z*v.z+this.w*v.w;}

	lengthSq(){return this.x**2+this.y**2+this.z**2+this.w**2;}
	length(){return Math.sqrt(this.lengthSq());}
	manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w);}
	normalize(){return this.divideScalar(this.length()||1);}
	setLength(l){return this.normalize().multiplyScalar(l);}

	lerp(v,a){this.x+=(v.x-this.x)*a;this.y+=(v.y-this.y)*a;this.z+=(v.z-this.z)*a;this.w+=(v.w-this.w)*a;return this;}
	lerpVectors(v1,v2,a){this.x=v1.x+(v2.x-v1.x)*a;this.y=v1.y+(v2.y-v1.y)*a;this.z=v1.z+(v2.z-v1.z)*a;this.w=v1.w+(v2.w-v1.w)*a;return this;}

	equals(v){return v.x===this.x&&v.y===this.y&&v.z===this.z&&v.w===this.w;}

	fromArray(a,o=0){this.x=a[o];this.y=a[o+1];this.z=a[o+2];this.w=a[o+3];return this;}
	toArray(a=[],o=0){a[o]=this.x;a[o+1]=this.y;a[o+2]=this.z;a[o+3]=this.w;return a;}
	random(){this.x=Math.random();this.y=Math.random();this.z=Math.random();this.w=Math.random();return this;}

	*[Symbol.iterator](){yield this.x;yield this.y;yield this.z;yield this.w;}
}

export { GlazeVector4 };
