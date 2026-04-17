#version 300 es
precision highp float;

out vec4 outColor;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_bass;
uniform float u_treble;
uniform float u_interaction; 

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263 + u_interaction * 0.5, 0.416, 0.557 + u_interaction);
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float mask = smoothstep(0.8, 0.2, distance(st, vec2(0.5)));

    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    
    float angle = u_interaction * 5.0; 
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    uv *= rot;

    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 4.0; i++) {

        uv.x += sin(uv.y * 2.0 + u_time) * u_interaction * 0.5;
        
        uv = fract(uv * (1.5 + u_bass + u_interaction * 2.0)) - 0.5;
        
        float d = length(uv) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + i*.4 + u_time*.4);
        
        d = sin(d * (8.0 + u_interaction * 20.0) + u_time) / (8.0 + u_interaction * 10.0);
        d = abs(d);

        float glow = 0.01 + (u_interaction * 0.03);
        d = pow(glow / d, 1.2);
        
        finalColor += col * d;
    }

    finalColor *= (1.0 + u_interaction * 1.5);
    outColor = vec4(finalColor * mask, 1.0);
}