#version 330 core

in vec2 texture_coord;
flat in int texture_layer;
out vec4 FragColor;

uniform sampler2DArray texture0;

void main()
{
	FragColor = texture(texture0, vec3(texture_coord, texture_layer)) + vec4(0.5);
}
