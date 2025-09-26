export class Quaternion {
    constructor(x=0, y=0, z=0, w=1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }

    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }

    copy(q) {
        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        this.w = q.w;
        return this;
    }

    multiply(q) {
        const ax=this.x, ay=this.y, az=this.z, aw=this.w;
        const bx=q.x, by=q.y, bz=q.z, bw=q.w;

        this.x = ax*bw + aw*bx + ay*bz - az*by;
        this.y = ay*bw + aw*by + az*bx - ax*bz;
        this.z = az*bw + aw*bz + ax*by - ay*bx;
        this.w = aw*bw - ax*bx - ay*by - az*bz;
        return this;
    }

    normalize() {
        let l = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w);
        if(l===0) { this.x=0; this.y=0; this.z=0; this.w=1; }
        else { l=1/l; this.x*=l; this.y*=l; this.z*=l; this.w*=l; }
        return this;
    }

    setFromEuler(euler) {
        const c1 = Math.cos(euler.x/2);
        const c2 = Math.cos(euler.y/2);
        const c3 = Math.cos(euler.z/2);
        const s1 = Math.sin(euler.x/2);
        const s2 = Math.sin(euler.y/2);
        const s3 = Math.sin(euler.z/2);

        const order = euler.order || 'XYZ';

        if(order==='XYZ') {
            this.x = s1*c2*c3 + c1*s2*s3;
            this.y = c1*s2*c3 - s1*c2*s3;
            this.z = c1*c2*s3 + s1*s2*c3;
            this.w = c1*c2*c3 - s1*s2*s3;
        }
        // Lainnya bisa ditambahkan sesuai order
        return this;
    }
}
