// src/core/math/Interpolant/DiscreteInterpolant.js
import { Interpolant } from './Interpolant.js';

/**
 * DiscreteInterpolant returns the left sample value (step / hold).
 */
class DiscreteInterpolant extends Interpolant {

	/**
	 * For discrete interpolation we just copy the left sample.
	 *
	 * @param {number} i1
	 * @return {TypedArray}
	 */
	interpolate_( i1 /*, t0, t, t1 */ ) {

		return this.copySampleValue_( i1 - 1 );

	}

}

export { DiscreteInterpolant }; 
