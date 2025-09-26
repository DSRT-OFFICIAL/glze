// src/core/math/Interpolant/QuaternionLinearInterpolant.js
import { Interpolant } from './Interpolant.js';
import { Quaternion } from '../Primitives/Quaternion.js';

/**
 * QuaternionLinearInterpolant performs spherical linear interpolation (slerp)
 * between quaternion samples (4-component values).
 *
 * Note: sampleValues are expected to be laid out as [x,y,z,w, x,y,z,w, ...].
 */
class QuaternionLinearInterpolant extends Interpolant {

	interpolate_( i1, t0, t, t1 ) {

		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;

		// ensure stride == 4 (quaternion)
		if ( stride !== 4 ) {

			// fallback to numeric linear interpolation if value size is not 4
			const alpha = ( t1 === t0 ) ? 0 : ( ( t - t0 ) / ( t1 - t0 ) );
			const offset0 = ( i1 - 1 ) * stride;
			const offset1 = i1 * stride;

			for ( let i = 0; i !== stride; ++ i ) {
				result[ i ] = values[ offset0 + i ] + ( values[ offset1 + i ] - values[ offset0 + i ] ) * alpha;
			}

			return result;

		}

		const offset0 = ( i1 - 1 ) * 4;
		const offset1 = i1 * 4;

		const q1 = new Quaternion(
			values[ offset0 ],
			values[ offset0 + 1 ],
			values[ offset0 + 2 ],
			values[ offset0 + 3 ]
		);

		const q2 = new Quaternion(
			values[ offset1 ],
			values[ offset1 + 1 ],
			values[ offset1 + 2 ],
			values[ offset1 + 3 ]
		);

		const alpha = ( t1 === t0 ) ? 0 : ( ( t - t0 ) / ( t1 - t0 ) );

		q1.slerp( q2, alpha );

		// write back to result buffer
		result[ 0 ] = q1.x;
		result[ 1 ] = q1.y;
		result[ 2 ] = q1.z;
		result[ 3 ] = q1.w;

		return result;

	}

}

export { QuaternionLinearInterpolant };
