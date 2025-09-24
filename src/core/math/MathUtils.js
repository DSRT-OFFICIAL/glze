export const MathUtils = {

  degToRad: function(deg){ return deg * (Math.PI/180); },

  radToDeg: function(rad){ return rad * (180/Math.PI); },

  clamp: function(value, min, max){ return Math.max(min, Math.min(max, value)); },

  lerp: function(a, b, t){ return a + (b-a)*t; },

  lerpVector2: function(v1, v2, t){
    return { x: MathUtils.lerp(v1.x, v2.x, t), y: MathUtils.lerp(v1.y, v2.y, t) };
  },

  lerpVector3: function(v1, v2, t){
    return { x: MathUtils.lerp(v1.x,v2.x,t), y: MathUtils.lerp(v1.y,v2.y,t), z: MathUtils.lerp(v1.z,v2.z,t) };
  },

  randFloat: function(min,max){ return min + Math.random()*(max-min); },

  randInt: function(min,max){ return Math.floor(min + Math.random()*(max-min+1)); },

  isPowerOfTwo: function(value){ return (value & (value - 1)) === 0 && value !== 0; }
};
