#version 330 core

layout (points) in;
layout (points, max_vertices=1) out;

in vec2 tex_coord[];
flat in int tex_layer[];

out vec2 texture_coord;
flat out int texture_layer;

void main() {
    gl_Position = gl_in[0].gl_Position;
    texture_coord = tex_coord[0];
    texture_layer = tex_layer[0];
    EmitVertex();
    EndPrimitive();
}