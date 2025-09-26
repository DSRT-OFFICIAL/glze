// src/core/math/Interpolant/LinearInterpolant.js
import { Interpolant } from './Interpolant.js';

/**
 * LinearInterpolant performs linear interpolation between two samples.
 *
 * It respects the Interpolant API and returns the result buffer.
 */
class LinearInterpolant extends Interpolant {

	/**
	 * Compute linear interpolation for sample at interval i1 (pp[i1-1]..pp[i1]).
	 *
	 * @param {number} i1 - Index of the right sample of the interval.
	 * @param {number} t0 - Time of left sample.
	 * @param {number} t - Current time to evaluate.
	 * @param {number} t1 - Time of right sample.
	 * @return {TypedArray} resultBuffer
	 */
	interpolate_( i1, t0, t, t1 ) {

		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;

		const offset0 = ( i1 - 1 ) * stride;
		const offset1 = i1 * stride;

		// Avoid division by zero
		const alpha = ( t1 === t0 ) ? 0 : ( ( t - t0 ) / ( t1 - t0 ) );

		for ( let i = 0; i !== stride; ++ i ) {

			const v0 = values[ offset0 + i ];
			const v1 = values[ offset1 + i ];

			result[ i ] = v0 + ( v1 - v0 ) * alpha;

		}

		return result;

	}

}

export { LinearInterpolant };
