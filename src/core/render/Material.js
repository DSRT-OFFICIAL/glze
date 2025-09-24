export class Material {
  constructor({ color=[1,1,1,1], vertexShader=null, fragmentShader=null }={}){
    this.color = color;

    // default shaders
    this.vertexShader = vertexShader || `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying vec3 vNormal;
      void main(){
        vNormal = aNormal;
        gl_Position = uProjection * uView * uModel * vec4(aPosition,1.0);
      }
    `;

    this.fragmentShader = fragmentShader || `
      precision mediump float;
      varying vec3 vNormal;
      uniform vec4 uColor;
      void main(){
        vec3 lightDir = normalize(vec3(1.0,1.0,1.0));
        float diff = max(dot(normalize(vNormal), lightDir),0.0);
        gl_FragColor = vec4(uColor.rgb*diff,uColor.a);
      }
    `;
  }
}
