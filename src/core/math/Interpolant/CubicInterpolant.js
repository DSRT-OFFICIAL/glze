// src/core/math/Interpolant/CubicInterpolant.js
import { Interpolant } from './Interpolant.js';

/**
 * CubicInterpolant: cubic Hermite interpolation (Catmull-Rom-like with tangents).
 *
 * This implementation expects neighbouring samples to compute tangents.
 */
class CubicInterpolant extends Interpolant {

	/**
	 * Cubic interpolation over samples:
	 * uses values at i1-2, i1-1, i1, i1+1 to compute Hermite polynomial.
	 */
	interpolate_( i1, t0, t, t1 ) {

		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;
		const pp = this.parameterPositions;

		// Indices for the 4 points
		const i0 = i1 - 2;
		const i2 = i1;
		const i3 = i1 + 1;

		// times for tangents (clamp to boundaries)
		const tPrev = pp[ i0 ] !== undefined ? pp[ i0 ] : ( t0 - ( t1 - t0 ) );
		const tNext = pp[ i3 ] !== undefined ? pp[ i3 ] : ( t1 + ( t1 - t0 ) );

		const offset0 = i0 * stride;
		const offset1 = ( i1 - 1 ) * stride; // left sample (p1)
		const offset2 = i2 * stride;         // right sample (p2)
		const offset3 = i3 * stride;

		const s = ( t - t0 ) / ( t1 - t0 );
		const s2 = s * s;
		const s3 = s2 * s;

		// Hermite basis functions
		const h00 = 2 * s3 - 3 * s2 + 1;
		const h10 = s3 - 2 * s2 + s;
		const h01 = -2 * s3 + 3 * s2;
		const h11 = s3 - s2;

		for ( let i = 0; i !== stride; ++ i ) {

			const p0 = values[ offset0 + i ];
			const p1 = values[ offset1 + i ];
			const p2 = values[ offset2 + i ];
			const p3 = values[ offset3 + i ];

			// Tangents (finite differences), scaled to interval length
			const m1 = ( p2 - p0 ) / ( t1 - tPrev );
			const m2 = ( p3 - p1 ) / ( tNext - t0 );

			result[ i ] = h00 * p1 + h10 * ( t1 - t0 ) * m1 + h01 * p2 + h11 * ( t1 - t0 ) * m2;

		}

		return result;

	}

}

export { CubicInterpolant };
