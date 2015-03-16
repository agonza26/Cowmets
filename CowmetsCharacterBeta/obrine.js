// gl-matrix 1.3.7 - https://github.com/toji/gl-matrix/blob/master/LICENSE.md
// https://github.com/toji/gl-matrix
(function(w,D){"object"===typeof exports?module.exports=D(global):"function"===typeof define&&define.amd?define([],function(){return D(w)}):D(w)})(this,function(w){function D(a){return o=a}function G(){return o="undefined"!==typeof Float32Array?Float32Array:Array}var E={};(function(){if("undefined"!=typeof Float32Array){var a=new Float32Array(1),b=new Int32Array(a.buffer);E.invsqrt=function(c){a[0]=c;b[0]=1597463007-(b[0]>>1);var d=a[0];return d*(1.5-0.5*c*d*d)}}else E.invsqrt=function(a){return 1/
Math.sqrt(a)}})();var o=null;G();var r={create:function(a){var b=new o(3);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2]):b[0]=b[1]=b[2]=0;return b},createFrom:function(a,b,c){var d=new o(3);d[0]=a;d[1]=b;d[2]=c;return d},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])},add:function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];
return c},subtract:function(a,b,c){if(!c||a===c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c},multiply:function(a,b,c){if(!c||a===c)return a[0]*=b[0],a[1]*=b[1],a[2]*=b[2],a;c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];return c},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b},scale:function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c},normalize:function(a,b){b||(b=a);var c=
a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(!g)return b[0]=0,b[1]=0,b[2]=0,b;if(1===g)return b[0]=c,b[1]=d,b[2]=e,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b},cross:function(a,b,c){c||(c=a);var d=a[0],e=a[1],a=a[2],g=b[0],f=b[1],b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c},length:function(a){var b=a[0],c=a[1],a=a[2];return Math.sqrt(b*b+c*c+a*a)},squaredLength:function(a){var b=a[0],c=a[1],a=a[2];return b*b+c*c+a*a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},direction:function(a,
b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1],a=a[2]-b[2],b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(c*c+d*d+e*e)}},H=null,y=new o(4);r.unproject=function(a,b,c,d,e){e||(e=a);H||(H=x.create());var g=H;y[0]=2*(a[0]-d[0])/d[2]-1;y[1]=2*(a[1]-d[1])/d[3]-1;y[2]=
2*a[2]-1;y[3]=1;x.multiply(c,b,g);if(!x.inverse(g))return null;x.multiplyVec4(g,y);if(0===y[3])return null;e[0]=y[0]/y[3];e[1]=y[1]/y[3];e[2]=y[2]/y[3];return e};var L=r.createFrom(1,0,0),M=r.createFrom(0,1,0),N=r.createFrom(0,0,1),z=r.create();r.rotationTo=function(a,b,c){c||(c=k.create());var d=r.dot(a,b);if(1<=d)k.set(O,c);else if(-0.999999>d)r.cross(L,a,z),1.0E-6>r.length(z)&&r.cross(M,a,z),1.0E-6>r.length(z)&&r.cross(N,a,z),r.normalize(z),k.fromAngleAxis(Math.PI,z,c);else{var d=Math.sqrt(2*(1+
d)),e=1/d;r.cross(a,b,z);c[0]=z[0]*e;c[1]=z[1]*e;c[2]=z[2]*e;c[3]=0.5*d;k.normalize(c)}1<c[3]?c[3]=1:-1>c[3]&&(c[3]=-1);return c};r.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var A={create:function(a){var b=new o(9);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8]):b[0]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=0;return b},createFrom:function(a,b,c,d,e,g,f,h,j){var i=new o(9);i[0]=a;i[1]=b;i[2]=c;i[3]=d;i[4]=e;i[5]=g;i[6]=f;i[7]=h;i[8]=j;return i},
determinant:function(a){var b=a[3],c=a[4],d=a[5],e=a[6],g=a[7],f=a[8];return a[0]*(f*c-d*g)+a[1]*(-f*b+d*e)+a[2]*(g*b-c*e)},inverse:function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],j=a[6],i=a[7],m=a[8],l=m*f-h*i,C=-m*g+h*j,q=i*g-f*j,n=c*l+d*C+e*q;if(!n)return null;n=1/n;b||(b=A.create());b[0]=l*n;b[1]=(-m*d+e*i)*n;b[2]=(h*d-e*f)*n;b[3]=C*n;b[4]=(m*c-e*j)*n;b[5]=(-h*c+e*g)*n;b[6]=q*n;b[7]=(-i*c+d*j)*n;b[8]=(f*c-d*g)*n;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],
f=a[3],h=a[4],j=a[5],i=a[6],m=a[7],a=a[8],l=b[0],C=b[1],q=b[2],n=b[3],k=b[4],p=b[5],o=b[6],s=b[7],b=b[8];c[0]=l*d+C*f+q*i;c[1]=l*e+C*h+q*m;c[2]=l*g+C*j+q*a;c[3]=n*d+k*f+p*i;c[4]=n*e+k*h+p*m;c[5]=n*g+k*j+p*a;c[6]=o*d+s*f+b*i;c[7]=o*e+s*h+b*m;c[8]=o*g+s*j+b*a;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0],b=b[1];c[0]=d*a[0]+b*a[3]+a[6];c[1]=d*a[1]+b*a[4]+a[7];return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1],b=b[2];c[0]=d*a[0]+e*a[3]+b*a[6];c[1]=d*a[1]+e*a[4]+b*a[7];c[2]=
d*a[2]+e*a[5]+b*a[8];return c},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])&&1.0E-6>Math.abs(a[3]-b[3])&&1.0E-6>Math.abs(a[4]-b[4])&&1.0E-6>Math.abs(a[5]-b[5])&&1.0E-6>Math.abs(a[6]-b[6])&&1.0E-6>Math.abs(a[7]-b[7])&&1.0E-6>Math.abs(a[8]-b[8])},identity:function(a){a||(a=A.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b},toMat4:function(a,b){b||(b=x.create());b[15]=1;b[14]=0;b[13]=0;b[12]=0;b[11]=0;b[10]=a[8];b[9]=a[7];b[8]=a[6];b[7]=0;b[6]=a[5];b[5]=a[4];b[4]=a[3];b[3]=0;b[2]=a[2];b[1]=a[1];b[0]=a[0];return b},str:function(a){return"["+a[0]+", "+a[1]+
", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"}},x={create:function(a){var b=new o(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b},createFrom:function(a,b,c,d,e,g,f,h,j,i,m,l,C,q,n,k){var p=new o(16);p[0]=a;p[1]=b;p[2]=c;p[3]=d;p[4]=e;p[5]=g;p[6]=f;p[7]=h;p[8]=j;p[9]=i;p[10]=m;p[11]=l;p[12]=C;p[13]=q;p[14]=n;p[15]=k;return p},set:function(a,
b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])&&1.0E-6>Math.abs(a[3]-b[3])&&1.0E-6>Math.abs(a[4]-b[4])&&1.0E-6>Math.abs(a[5]-b[5])&&1.0E-6>Math.abs(a[6]-b[6])&&1.0E-6>Math.abs(a[7]-b[7])&&1.0E-6>Math.abs(a[8]-b[8])&&1.0E-6>Math.abs(a[9]-b[9])&&1.0E-6>
Math.abs(a[10]-b[10])&&1.0E-6>Math.abs(a[11]-b[11])&&1.0E-6>Math.abs(a[12]-b[12])&&1.0E-6>Math.abs(a[13]-b[13])&&1.0E-6>Math.abs(a[14]-b[14])&&1.0E-6>Math.abs(a[15]-b[15])},identity:function(a){a||(a=x.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=
a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b},determinant:function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],j=a[7],i=a[8],m=a[9],l=a[10],C=a[11],q=a[12],n=a[13],k=a[14],a=a[15];return q*m*h*e-i*n*h*e-q*f*l*e+g*n*l*e+i*f*k*e-g*m*k*e-q*m*d*j+i*n*d*j+q*c*l*j-b*n*l*j-i*c*k*j+b*m*k*j+q*f*d*C-g*n*d*C-q*c*h*C+b*n*h*C+
g*c*k*C-b*f*k*C-i*f*d*a+g*m*d*a+i*c*h*a-b*m*h*a-g*c*l*a+b*f*l*a},inverse:function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],j=a[6],i=a[7],m=a[8],l=a[9],k=a[10],q=a[11],n=a[12],o=a[13],p=a[14],r=a[15],s=c*h-d*f,v=c*j-e*f,t=c*i-g*f,u=d*j-e*h,w=d*i-g*h,x=e*i-g*j,y=m*o-l*n,z=m*p-k*n,F=m*r-q*n,A=l*p-k*o,D=l*r-q*o,E=k*r-q*p,B=s*E-v*D+t*A+u*F-w*z+x*y;if(!B)return null;B=1/B;b[0]=(h*E-j*D+i*A)*B;b[1]=(-d*E+e*D-g*A)*B;b[2]=(o*x-p*w+r*u)*B;b[3]=(-l*x+k*w-q*u)*B;b[4]=(-f*E+j*F-i*z)*B;b[5]=
(c*E-e*F+g*z)*B;b[6]=(-n*x+p*t-r*v)*B;b[7]=(m*x-k*t+q*v)*B;b[8]=(f*D-h*F+i*y)*B;b[9]=(-c*D+d*F-g*y)*B;b[10]=(n*w-o*t+r*s)*B;b[11]=(-m*w+l*t-q*s)*B;b[12]=(-f*A+h*z-j*y)*B;b[13]=(c*A-d*z+e*y)*B;b[14]=(-n*u+o*v-p*s)*B;b[15]=(m*u-l*v+k*s)*B;return b},toRotationMat:function(a,b){b||(b=x.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b},toMat3:function(a,b){b||(b=A.create());b[0]=
a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b},toInverseMat3:function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],j=a[8],i=a[9],m=a[10],l=m*f-h*i,k=-m*g+h*j,q=i*g-f*j,n=c*l+d*k+e*q;if(!n)return null;n=1/n;b||(b=A.create());b[0]=l*n;b[1]=(-m*d+e*i)*n;b[2]=(h*d-e*f)*n;b[3]=k*n;b[4]=(m*c-e*j)*n;b[5]=(-h*c+e*g)*n;b[6]=q*n;b[7]=(-i*c+d*j)*n;b[8]=(f*c-d*g)*n;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],j=a[5],
i=a[6],m=a[7],l=a[8],k=a[9],q=a[10],n=a[11],o=a[12],p=a[13],r=a[14],a=a[15],s=b[0],v=b[1],t=b[2],u=b[3];c[0]=s*d+v*h+t*l+u*o;c[1]=s*e+v*j+t*k+u*p;c[2]=s*g+v*i+t*q+u*r;c[3]=s*f+v*m+t*n+u*a;s=b[4];v=b[5];t=b[6];u=b[7];c[4]=s*d+v*h+t*l+u*o;c[5]=s*e+v*j+t*k+u*p;c[6]=s*g+v*i+t*q+u*r;c[7]=s*f+v*m+t*n+u*a;s=b[8];v=b[9];t=b[10];u=b[11];c[8]=s*d+v*h+t*l+u*o;c[9]=s*e+v*j+t*k+u*p;c[10]=s*g+v*i+t*q+u*r;c[11]=s*f+v*m+t*n+u*a;s=b[12];v=b[13];t=b[14];u=b[15];c[12]=s*d+v*h+t*l+u*o;c[13]=s*e+v*j+t*k+u*p;c[14]=s*g+
v*i+t*q+u*r;c[15]=s*f+v*m+t*n+u*a;return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1],b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c},multiplyVec4:function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c},translate:function(a,b,c){var d=b[0],e=b[1],b=b[2],g,f,h,j,i,m,l,k,q,
n,o,p;if(!c||a===c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;g=a[0];f=a[1];h=a[2];j=a[3];i=a[4];m=a[5];l=a[6];k=a[7];q=a[8];n=a[9];o=a[10];p=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=j;c[4]=i;c[5]=m;c[6]=l;c[7]=k;c[8]=q;c[9]=n;c[10]=o;c[11]=p;c[12]=g*d+i*e+q*b+a[12];c[13]=f*d+m*e+n*b+a[13];c[14]=h*d+l*e+o*b+a[14];c[15]=j*d+k*e+p*b+a[15];return c},scale:function(a,b,c){var d=b[0],e=b[1],b=b[2];if(!c||a===c)return a[0]*=
d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c},rotate:function(a,b,c,d){var e=c[0],g=c[1],c=c[2],f=Math.sqrt(e*e+g*g+c*c),h,j,i,m,l,k,q,n,o,p,r,s,v,t,u,w,x,y,z,A;if(!f)return null;1!==f&&(f=1/f,e*=f,g*=f,c*=f);h=Math.sin(b);j=Math.cos(b);i=1-j;b=a[0];
f=a[1];m=a[2];l=a[3];k=a[4];q=a[5];n=a[6];o=a[7];p=a[8];r=a[9];s=a[10];v=a[11];t=e*e*i+j;u=g*e*i+c*h;w=c*e*i-g*h;x=e*g*i-c*h;y=g*g*i+j;z=c*g*i+e*h;A=e*c*i+g*h;e=g*c*i-e*h;g=c*c*i+j;d?a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*t+k*u+p*w;d[1]=f*t+q*u+r*w;d[2]=m*t+n*u+s*w;d[3]=l*t+o*u+v*w;d[4]=b*x+k*y+p*z;d[5]=f*x+q*y+r*z;d[6]=m*x+n*y+s*z;d[7]=l*x+o*y+v*z;d[8]=b*A+k*e+p*g;d[9]=f*A+q*e+r*g;d[10]=m*A+n*e+s*g;d[11]=l*A+o*e+v*g;return d},rotateX:function(a,b,c){var d=Math.sin(b),
b=Math.cos(b),e=a[4],g=a[5],f=a[6],h=a[7],j=a[8],i=a[9],m=a[10],l=a[11];c?a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+j*d;c[5]=g*b+i*d;c[6]=f*b+m*d;c[7]=h*b+l*d;c[8]=e*-d+j*b;c[9]=g*-d+i*b;c[10]=f*-d+m*b;c[11]=h*-d+l*b;return c},rotateY:function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],j=a[8],i=a[9],m=a[10],l=a[11];c?a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=
a[15]):c=a;c[0]=e*b+j*-d;c[1]=g*b+i*-d;c[2]=f*b+m*-d;c[3]=h*b+l*-d;c[8]=e*d+j*b;c[9]=g*d+i*b;c[10]=f*d+m*b;c[11]=h*d+l*b;return c},rotateZ:function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],j=a[4],i=a[5],m=a[6],l=a[7];c?a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+j*d;c[1]=g*b+i*d;c[2]=f*b+m*d;c[3]=h*b+l*d;c[4]=e*-d+j*b;c[5]=g*-d+i*b;c[6]=f*-d+m*b;c[7]=h*-d+l*b;return c},frustum:function(a,b,c,d,e,g,f){f||
(f=x.create());var h=b-a,j=d-c,i=g-e;f[0]=2*e/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2*e/j;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/j;f[10]=-(g+e)/i;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(2*g*e)/i;f[15]=0;return f},perspective:function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return x.frustum(-b,b,-a,a,c,d,e)},ortho:function(a,b,c,d,e,g,f){f||(f=x.create());var h=b-a,j=d-c,i=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/j;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/i;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/j;f[14]=
-(g+e)/i;f[15]=1;return f},lookAt:function(a,b,c,d){d||(d=x.create());var e,g,f,h,j,i,m,l,k=a[0],o=a[1],a=a[2];f=c[0];h=c[1];g=c[2];m=b[0];c=b[1];e=b[2];if(k===m&&o===c&&a===e)return x.identity(d);b=k-m;c=o-c;m=a-e;l=1/Math.sqrt(b*b+c*c+m*m);b*=l;c*=l;m*=l;e=h*m-g*c;g=g*b-f*m;f=f*c-h*b;(l=Math.sqrt(e*e+g*g+f*f))?(l=1/l,e*=l,g*=l,f*=l):f=g=e=0;h=c*f-m*g;j=m*e-b*f;i=b*g-c*e;(l=Math.sqrt(h*h+j*j+i*i))?(l=1/l,h*=l,j*=l,i*=l):i=j=h=0;d[0]=e;d[1]=h;d[2]=b;d[3]=0;d[4]=g;d[5]=j;d[6]=c;d[7]=0;d[8]=f;d[9]=
i;d[10]=m;d[11]=0;d[12]=-(e*k+g*o+f*a);d[13]=-(h*k+j*o+i*a);d[14]=-(b*k+c*o+m*a);d[15]=1;return d},fromRotationTranslation:function(a,b,c){c||(c=x.create());var d=a[0],e=a[1],g=a[2],f=a[3],h=d+d,j=e+e,i=g+g,a=d*h,m=d*j,d=d*i,k=e*j,e=e*i,g=g*i,h=f*h,j=f*j,f=f*i;c[0]=1-(k+g);c[1]=m+f;c[2]=d-j;c[3]=0;c[4]=m-f;c[5]=1-(a+g);c[6]=e+h;c[7]=0;c[8]=d+j;c[9]=e-h;c[10]=1-(a+k);c[11]=0;c[12]=b[0];c[13]=b[1];c[14]=b[2];c[15]=1;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+
a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"}},k={create:function(a){var b=new o(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new o(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])&&1.0E-6>
Math.abs(a[3]-b[3])},identity:function(a){a||(a=k.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a}},O=k.identity();k.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a===b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};k.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};k.inverse=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],c=(c=c*c+d*d+e*e+g*g)?1/c:0;if(!b||a===b)return a[0]*=-c,a[1]*=-c,a[2]*=-c,a[3]*=
c,a;b[0]=-a[0]*c;b[1]=-a[1]*c;b[2]=-a[2]*c;b[3]=a[3]*c;return b};k.conjugate=function(a,b){if(!b||a===b)return a[0]*=-1,a[1]*=-1,a[2]*=-1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};k.length=function(a){var b=a[0],c=a[1],d=a[2],a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};k.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(0===f)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};k.add=function(a,b,c){if(!c||
a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a[3]+=b[3],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c};k.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],a=a[3],f=b[0],h=b[1],j=b[2],b=b[3];c[0]=d*b+a*f+e*j-g*h;c[1]=e*b+a*h+g*f-d*j;c[2]=g*b+a*j+d*h-e*f;c[3]=a*b-d*f-e*h-g*j;return c};k.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=a[0],f=a[1],h=a[2],a=a[3],j=a*d+f*g-h*e,i=a*e+h*d-b*g,k=a*g+b*e-f*d,d=-b*d-f*e-h*g;c[0]=j*a+d*-b+i*-h-k*-f;c[1]=i*a+
d*-f+k*-b-j*-h;c[2]=k*a+d*-h+j*-f-i*-b;return c};k.scale=function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a[3]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c};k.toMat3=function(a,b){b||(b=A.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,j=e+e,i=c*f,k=c*h,c=c*j,l=d*h,d=d*j,e=e*j,f=g*f,h=g*h,g=g*j;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=k-g;b[4]=1-(i+e);b[5]=d+f;b[6]=c+h;b[7]=d-f;b[8]=1-(i+l);return b};k.toMat4=function(a,b){b||(b=x.create());var c=a[0],d=a[1],e=a[2],g=
a[3],f=c+c,h=d+d,j=e+e,i=c*f,k=c*h,c=c*j,l=d*h,d=d*j,e=e*j,f=g*f,h=g*h,g=g*j;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=0;b[4]=k-g;b[5]=1-(i+e);b[6]=d+f;b[7]=0;b[8]=c+h;b[9]=d-f;b[10]=1-(i+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};k.slerp=function(a,b,c,d){d||(d=a);var e=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3],g,f;if(1<=Math.abs(e))return d!==a&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3]),d;g=Math.acos(e);f=Math.sqrt(1-e*e);if(0.001>Math.abs(f))return d[0]=0.5*a[0]+0.5*b[0],d[1]=0.5*a[1]+0.5*b[1],
d[2]=0.5*a[2]+0.5*b[2],d[3]=0.5*a[3]+0.5*b[3],d;e=Math.sin((1-c)*g)/f;c=Math.sin(c*g)/f;d[0]=a[0]*e+b[0]*c;d[1]=a[1]*e+b[1]*c;d[2]=a[2]*e+b[2]*c;d[3]=a[3]*e+b[3]*c;return d};k.fromRotationMatrix=function(a,b){b||(b=k.create());var c=a[0]+a[4]+a[8],d;if(0<c)d=Math.sqrt(c+1),b[3]=0.5*d,d=0.5/d,b[0]=(a[7]-a[5])*d,b[1]=(a[2]-a[6])*d,b[2]=(a[3]-a[1])*d;else{d=k.fromRotationMatrix.s_iNext=k.fromRotationMatrix.s_iNext||[1,2,0];c=0;a[4]>a[0]&&(c=1);a[8]>a[3*c+c]&&(c=2);var e=d[c],g=d[e];d=Math.sqrt(a[3*c+
c]-a[3*e+e]-a[3*g+g]+1);b[c]=0.5*d;d=0.5/d;b[3]=(a[3*g+e]-a[3*e+g])*d;b[e]=(a[3*e+c]+a[3*c+e])*d;b[g]=(a[3*g+c]+a[3*c+g])*d}return b};A.toQuat4=k.fromRotationMatrix;(function(){var a=A.create();k.fromAxes=function(b,c,d,e){a[0]=c[0];a[3]=c[1];a[6]=c[2];a[1]=d[0];a[4]=d[1];a[7]=d[2];a[2]=b[0];a[5]=b[1];a[8]=b[2];return k.fromRotationMatrix(a,e)}})();k.identity=function(a){a||(a=k.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a};k.fromAngleAxis=function(a,b,c){c||(c=k.create());var a=0.5*a,d=Math.sin(a);
c[3]=Math.cos(a);c[0]=d*b[0];c[1]=d*b[1];c[2]=d*b[2];return c};k.toAngleAxis=function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1]+a[2]*a[2];0<c?(b[3]=2*Math.acos(a[3]),c=E.invsqrt(c),b[0]=a[0]*c,b[1]=a[1]*c,b[2]=a[2]*c):(b[3]=0,b[0]=1,b[1]=0,b[2]=0);return b};k.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};var J={create:function(a){var b=new o(2);a?(b[0]=a[0],b[1]=a[1]):(b[0]=0,b[1]=0);return b},createFrom:function(a,b){var c=new o(2);c[0]=a;c[1]=b;return c},add:function(a,b,c){c||
(c=b);c[0]=a[0]+b[0];c[1]=a[1]+b[1];return c},subtract:function(a,b,c){c||(c=b);c[0]=a[0]-b[0];c[1]=a[1]-b[1];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;return c},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},set:function(a,b){b[0]=a[0];b[1]=a[1];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-
b[0])&&1.0E-6>Math.abs(a[1]-b[1])},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];return b},normalize:function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1];0<c?(c=Math.sqrt(c),b[0]=a[0]/c,b[1]=a[1]/c):b[0]=b[1]=0;return b},cross:function(a,b,c){a=a[0]*b[1]-a[1]*b[0];if(!c)return a;c[0]=c[1]=0;c[2]=a;return c},length:function(a){var b=a[0],a=a[1];return Math.sqrt(b*b+a*a)},squaredLength:function(a){var b=a[0],a=a[1];return b*b+a*a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]},direction:function(a,
b,c){c||(c=a);var d=a[0]-b[0],a=a[1]-b[1],b=d*d+a*a;if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/Math.sqrt(b);c[0]=d*b;c[1]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);return d},str:function(a){return"["+a[0]+", "+a[1]+"]"}},I={create:function(a){var b=new o(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new o(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];
b[2]=a[2];b[3]=a[3];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])&&1.0E-6>Math.abs(a[3]-b[3])},identity:function(a){a||(a=I.create());a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},transpose:function(a,b){if(!b||a===b){var c=a[1];a[1]=a[2];a[2]=c;return a}b[0]=a[0];b[1]=a[2];b[2]=a[1];b[3]=a[3];return b},determinant:function(a){return a[0]*a[3]-a[2]*a[1]},inverse:function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=c*g-e*
d;if(!f)return null;f=1/f;b[0]=g*f;b[1]=-d*f;b[2]=-e*f;b[3]=c*f;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],a=a[3];c[0]=d*b[0]+e*b[2];c[1]=d*b[1]+e*b[3];c[2]=g*b[0]+a*b[2];c[3]=g*b[1]+a*b[3];return c},rotate:function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],a=a[3],f=Math.sin(b),b=Math.cos(b);c[0]=d*b+e*f;c[1]=d*-f+e*b;c[2]=g*b+a*f;c[3]=g*-f+a*b;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0],b=b[1];c[0]=d*a[0]+b*a[1];c[1]=d*a[2]+b*a[3];return c},scale:function(a,
b,c){c||(c=a);var d=a[1],e=a[2],g=a[3],f=b[0],b=b[1];c[0]=a[0]*f;c[1]=d*b;c[2]=e*f;c[3]=g*b;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"}},K={create:function(a){var b=new o(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):(b[0]=0,b[1]=0,b[2]=0,b[3]=0);return b},createFrom:function(a,b,c,d){var e=new o(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},add:function(a,b,c){c||(c=b);c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c},subtract:function(a,b,c){c||(c=
b);c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];c[3]=a[3]-b[3];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];c[3]=a[3]*b[3];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];c[2]=a[2]/b[2];c[3]=a[3]/b[3];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},equal:function(a,b){return a===b||1.0E-6>Math.abs(a[0]-b[0])&&1.0E-6>
Math.abs(a[1]-b[1])&&1.0E-6>Math.abs(a[2]-b[2])&&1.0E-6>Math.abs(a[3]-b[3])},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b},length:function(a){var b=a[0],c=a[1],d=a[2],a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)},squaredLength:function(a){var b=a[0],c=a[1],d=a[2],a=a[3];return b*b+c*c+d*d+a*a},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);d[3]=a[3]+c*(b[3]-a[3]);return d},str:function(a){return"["+a[0]+", "+
a[1]+", "+a[2]+", "+a[3]+"]"}};w&&(w.glMatrixArrayType=o,w.MatrixArray=o,w.setMatrixArrayType=D,w.determineMatrixArrayType=G,w.glMath=E,w.vec2=J,w.vec3=r,w.vec4=K,w.mat2=I,w.mat3=A,w.mat4=x,w.quat4=k);return{glMatrixArrayType:o,MatrixArray:o,setMatrixArrayType:D,determineMatrixArrayType:G,glMath:E,vec2:J,vec3:r,vec4:K,mat2:I,mat3:A,mat4:x,quat4:k}});

function ListNode(newitem){
	this.item = newitem;
}
ListNode.prototype.item = null;
ListNode.prototype.link = null;

/**
 * Creates a new instance of List.
 * 
 * @class A singly linked list of nodes, each with item and link properties. Unlike other languages, a list can contain unrelated object types at the same time.
 * However, this may result in unexpected results when processing its contents with a loop.
 * @property {ListNode} head Pointer to the first node in the list.
 * @property {ListNode} tail Pointer to the last node in the list.
 * @property {number} length The number of nodes in the list.
 */
function List(){
}

List.prototype.head = null;
List.prototype.tail = null;
List.prototype.length = 0;

/**
 * Inserts the given object at the end of the list.
 *  
 * @param {Object} object The object to be inserted.
 */
List.prototype.push = function(object){
	var newNode = new ListNode(object);
	if(this.head === null){
		this.head = newNode;
	}else{
		this.tail.link = newNode;
	}
	this.tail = newNode;
	this.length++;
}

/**
 * Inserts the given object at the front of the list.
 *  
 * @param {Object} object The object to be inserted.
 */
List.prototype.push_front = function(object){
	var newNode = new ListNode(object);
	if(this.head === null){
		this.tail = newNode;
	}else{
		newNode.link = this.head;
	}
	this.head = newNode;
	this.length++;
}

/**
 * Inserts the given object at the front of the list.
 *  
 * @param {Object} object The object to be inserted.
 */
List.prototype.push_back = function(object){
	this.push(object);
}

/**
 * Removes the head of the list and returns its item.
 * 
 * @return {Object} The contents of the head node.
 */
List.prototype.pop = function(){
	var item = null;
	if(this.head != null){
		item = this.head.item;
		if(this.tail == this.head){
			this.tail = null;
		}
		this.head = this.head.link;
		this.length--;
	}
	return item;
}

/**
 * Removes the head of the list and returns its item.
 * 
 * @return {Object} The contents of the head node.
 */
List.prototype.pop_front = function(){
	return this.pop();
}

/**
 * Removes the head of the list and returns its item.
 * 
 * @return {Object} The contents of the head node.
 */
List.prototype.pop_back = function(){
	var item = null;
	if(this.head != null && this.tail != null){
		item = this.tail.item;
		this.remove(item);
		//this.head = this.head.link;
		//this.length--;
	}
	return item;
}

/**
 * Removes the first instance found of the given object from the list. If there is more than one instance the others remain.
 * 
 * @param {Object} object The object to remove.
 * @return {bool} True if the object was found and removed, false otherwise.
 */
List.prototype.remove = function(object){
	if(this.head != null){
		if(this.head.item === object){
			this.head = this.head.link;
			this.length--;
			return true;
		}
		var prev = this.head;
		var curr = this.head.link;
		while(curr !== null){
			if(curr.item === object){
				prev.link = curr.link;
				if(this.tail.item === object){
					this.tail = prev;
				}
				this.length--;
				return true;
			}
			prev = curr;
			curr = curr.link;
		}
	}
	return false;
}

/**
 * Searches the list for the given object.
 *  
 * @param {Object} object The object to be looked for.
 * @return {bool} True if found, false otherwise.
 */
List.prototype.find = function(object){
	for(var node = this.head; node !== null; node = node.link){
		if(node.item == object){
			return true;
		}
	}
	return false;
}

/**
 * Returns the object in the node at the given index.
 *  
 * @param {Object} index The node index to retrieve an object from. null if the index is out of range.
 */
List.prototype.getAt = function(index){
	var item = null;
	var cur = this.head;
	if(index >= 0 && index < this.length){
		while(index > 0 && cur != null){
			cur = cur.link;
			index--;
		}
		item = cur.item;
	}
	return item;
}

/**
 * For each item in the list the given function is called with the item and the given additional parameters as parameters.
 * 
 * @param {Object} func The function to be called.
 * @param {Object} params Additional parameters to pass to the function.
 */
List.prototype.foreach = function(func, params){
	for(var node = this.head; node !== null; node = node.link){
		func(node.item, params);
	}
}

/**
 * Joins the list into a string for debugging purposes.
 * 
 * @return {string} The list as a string. 
 */
List.prototype.toString = function(){
	var count = 0;
	var curr = this.head;
	var dbgstring = "";
	while(curr !== null){
		dbgstring += "["+count+": ";
		dbgstring += curr.item+"]";
		//dbgstring += "--Link: "+curr.link+"\n";
		curr = curr.link;
		count++;
	}
	return dbgstring;
}

/**
 * Creates a new instance of Vector.
 * 
 * @class A simple mathematical vector that can be used for position, color, or anything else that can take advantage of a 4 float vector. Although it has 4 floats it can be used as a 2 or 3 float vector.
 * @param {number} x The initial x value.
 * @param {number} y The initial y value.
 * @param {number} z Optional: The initial z value.
 * @property {number} x The x value.
 * @property {number} y The y value.
 * @property {number} z The z value.
 * @property {number} w The w value.
 * @property {number} r An alias for x.
 * @property {number} g An alias for y.
 * @property {number} b An alias for z.
 * @property {number} a An alias for w.
 * @property {number} length The length of the vector.
 */
function Vector(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z ? z : 0;
	this.w = 0;
}
Vector.prototype.x = 0;
Vector.prototype.y = 0;
Vector.prototype.z = 0;
Vector.prototype.w = 0;
Vector.prototype.r = 0;
Vector.prototype.g = 0;
Vector.prototype.b = 0;
Vector.prototype.a = 0;
Vector.prototype.length = 0;

Vector.prototype = {
	get r(){
		return this.x;
	},
	set r(val){
		this.x = val;
	},

	get g(){
		return this.y;
	},
	set g(val){
		this.y = val;
	},
	
	get b(){
		return this.z;
	},
	set b(val){
		this.z = val;
	},
	
	get a(){
		return this.w;
	},
	set a(val){
		this.w = val;
	},
	
	get length(){
		return Math.sqrt((this.x*this.x)+(this.y*this.y)+(this.z*this.z)+(this.w*this.w));
	}
}

/**
 * Adds the given vector to the calling vector and returns a new vector.
 * 
 * @param {Vector} val The vector to add to the caller.
 * @return {Vector} The result.
 */
Vector.prototype.add = function(val){
	var temp = new Vector(0,0,0);
	temp.x = this.x+val.x;
	temp.y = this.y+val.y;
	temp.z = this.z+val.z;
	temp.w = this.w+val.w;
	return temp;
}

/**
 * Subtracts the given vector from the calling vector and returns a new vector.
 * 
 * @param {Vector} val The vector to subtract from the caller.
 * @return {Vector} The result.
 */
Vector.prototype.sub = function(val){
	var temp = new Vector(0,0,0);
	temp.x = this.x-val.x;
	temp.y = this.y-val.y;
	temp.z = this.z-val.z;
	temp.w = this.w-val.w;
	return temp;
}

/**
 * Multiplies the components of given vector with those of the calling vector and returns a new vector.
 * OR
 * Scales the calling vector by the given scalar.
 * 
 * @param {Vector or number} val The vector or scalar to multiply the caller by.
 * @return {Vector} The result.
 */
Vector.prototype.mult = function(val){
	var temp = new Vector(0,0,0);
	if(val instanceof Vector){
		temp.x = this.x*val.x;
		temp.y = this.y*val.y;
		temp.z = this.z*val.z;
		temp.w = this.w*val.w;
	}else{
		temp.x = this.x*val;
		temp.y = this.y*val;
		temp.z = this.z*val;
		temp.w = this.w*val;
	}
	return temp;
}

/**
 * Divides the components of given vector with those of the calling vector and returns a new vector.
 * OR
 * Divides the calling vector by the given scalar.
 * 
 * @param {Vector or number} val The vector or scalar to divide the caller by.
 * @return {Vector} The result.
 */
Vector.prototype.div = function(val){
	var temp = new Vector(0,0,0);
	if(val instanceof Vector){
		temp.x = this.x/val.x;
		temp.y = this.y/val.y;
		temp.z = this.z/val.z;
		temp.w = this.w/val.w;
	}else{
		temp.x = this.x/val;
		temp.y = this.y/val;
		temp.z = this.z/val;
		temp.w = this.w/val;
	}
	return temp;
}

/**
 * Negates the calling vector and returns a new vector.
 * 
 * @return {Vector} The result.
 */
Vector.prototype.neg = function(){
	var temp = new Vector(0,0,0);
	temp.x = -this.x;
	temp.y = -this.y;
	temp.z = -this.z;
	temp.w = -this.w;
	return temp;
}

/**
 * Compares the components of the caller to the given vector to determine if they are equal.
 * 
 * @param {Vector} val The vector to compare the caller to.
 * @return {Vector} The result.
 */
Vector.prototype.equals = function(val){
	if(this.x != val.x){
		return false;
	}
	if(this.y != val.y){
		return false;
	}
	if(this.z != val.z){
		return false;
	}
	if(this.w != val.w){
		return false;
	}
	return true;
}

/**
 * Calculates the cross product between the caller and the given vector. callerXval
 * 
 * @param {Vector} val The vector to cross the caller with.
 * @return {Vector} The result.
 */
Vector.prototype.cross = function(val){
	var temp = new Vector(0,0,0);
	temp.x = this.y*val.z-this.z*val.y;
	temp.y = this.z*val.x-this.x*val.z;
	temp.z = this.x*val.y-this.y*val.x;
	return temp;
}

/**
 * Calculates the dot product between the caller and the given vector.
 * 
 * @param {Vector} val The vector to dot with the caller.
 * @return {number} The result.
 */
Vector.prototype.dot = function(val){
	return this.x*val.x+this.y*val.y+this.z*val.z+this.w*val.w;
}

/**
 * Returns a normalized vector.
 * 
 * @return {Vector} The normalized result.
 */
Vector.prototype.normalize = function(){
	var length = this.length;
	var temp = new Vector(0,0,0);
	temp.x = this.x/length;
	temp.y = this.y/length;
	temp.z = this.z/length;
	temp.w = this.w/length;
	return temp;
}

/**
 * Joins the vector into a debug string.
 * 
 * @return {string} Vector as a string.
 */
Vector.prototype.toString = function(){
	return "["+this.x+","+this.y+","+this.z+","+this.w+"]";
}

/**
 * Creates a Vector from a vector represented by an array.
 * 
 * @param {Array} arr
 * @return {Vector} A new vector.
 */
Vector.arrayVector = function(arr){
//function arrayVector(arr){
	var vec = new Vector(arr[0],arr[1], arr[2] ? arr[2] : 0);
	vec.w = arr[3] ? arr[3] : 0;
	return vec;
}


/**
 * Creates a new instance of ResourceMonitor or returns the singleton instance.
 * 
 * @class Singleton that keeps track of loading resources. By default there is a global reference called Resources.
 * @property {ResourceMonitor} instance The singlton instance.
 * @property {number} totalItems The total number of items that have been requested for loading.
 * @property {number} leftToLoad The number of items that are still loading.
 */
function ResourceMonitor(){
	if(ResourceMonitor.prototype.instance){
		return ResourceMonitor.prototype.instance;
	}
	ResourceMonitor.prototype.instance = this;
	this.loadList = new List();
	this.totalItems = 0;
	this.leftToLoad = 0;
}

ResourceMonitor.prototype.instance = null;
ResourceMonitor.prototype.loadList = new List();
ResourceMonitor.prototype.totalItems = 0;
ResourceMonitor.prototype.leftToLoad = 0;

ResourceMonitor.prototype.addToLoad = function(){
	this.totalItems++;
	this.leftToLoad++;
}

/**
 * Returns the number of items that are still loading.
 * 
 * @return {number} The number of items left to load.
 */
ResourceMonitor.prototype.getLeftToLoad = function(){
	for(var font in Fonts.fonts){
	//for(var font = 0; font < Fonts.fonts.length; font++){
		if(!Fonts.fonts[font].loaded){
			Fonts.fonts[font].checkIfLoaded();
		}
	}
	return this.leftToLoad;
}

/**
 * Returns the percentage of loaded items.
 * 
 * @return {number} The percentage.
 */
ResourceMonitor.prototype.percentLoaded = function(){
	for(var font in Fonts.fonts){
	//for(var font = 0; font < Fonts.fonts.length; font++){
		if(!Fonts.fonts[font].loaded){
			Fonts.fonts[font].checkIfLoaded();
		}
	}
	return this.leftToLoad/this.totalItems;
}

var Resources = new ResourceMonitor();

/**
 * Creates a new instance of TextureManager or returns the singleton instance.
 * 
 * @class Singleton that manages image loading, texture creation, and texture reuse. By default there is a global reference called Textures.
 * @property {TextureManager} instance The singlton instance.
 * @property {Array<Images>} imgs Array of loaded images indexed by their src.
 */
function TextureManager(){
	if(TextureManager.prototype.instance){
		return TextureManager.prototype.instance;
	}
	TextureManager.prototype.instance = this;
	this.imgs = new Array();
	this.waitingList = new List();
}

TextureManager.prototype.instance = null;
TextureManager.prototype.imgs = new Array();
TextureManager.prototype.waitingList = new List();

/**
 * Returns an image if it is already loaded, otherwise it starts loading the image source and returns a new image.
 * 
 * @param {string} src The image source to be loaded.
 * @param {bool} crossDomain Optional: If the image is not in the same domain as the calling script this must be true.
 * @param {bool} logOnLoad Optional: If true a debug statement is printed when it finishes loading.
 * @return {Image} The image object that the requested source will be loaded into.
 */
TextureManager.prototype.load = function(src, crossDomain, logOnLoad){
	if(this.imgs[src] == undefined){
		Resources.addToLoad();
		this.imgs[src] = new Image();
		this.imgs[src].loaded = false;
		if(crossDomain){
			this.imgs[src].crossOrigin = "anonymous";
		}
		this.imgs[src].src = src;
		this.imgs[src].onload = function(){
			//if(logOnLoad == undefined || logOnLoad){
			if(logOnLoad){
				println(this.src+" loaded");
			}
			Resources.leftToLoad--;
			if(!Textures.createTexture(this)){
				Textures.waitingList.push(this);
			}
			this.loaded = true;
		}
		this.imgs[src].onabort = function(){
			alert("there was an error");
		}
	}
	return this.imgs[src];
}

TextureManager.prototype.create = function(){
	this.waitingList.foreach(Textures.createTexture);
}

/**
 * Creates a WebGL texture from the given image. Can also create a texure out of a canvas object allowing the use of 2D canvas drawings or text as textures.
 * image.texture is set to this new texture
 * 
 * @param {Image} image The image to use as the texture data.
 * @return {bool} Returns true if the texture was created successfully.
 */
TextureManager.prototype.createTexture = function(image){
	if(ctx != undefined){
		if(ctx.createTexture){
			var texture = image.texture;
			if(texture == undefined){
				texture = ctx.createTexture();
			}
			texture.image = image;
			ctx.bindTexture(ctx.TEXTURE_2D, texture);
			ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, true);
			ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
			ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, texture.image);
			//ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
			//ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
			
			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
			ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
			//ctx.generateMipmap(ctx.TEXTURE_2D);
			
			ctx.bindTexture(ctx.TEXTURE_2D, null);
			image.texture = texture;
			return true;
		}
	}
	return false;
}

var Textures = new TextureManager();

/**
 * Creates a new instance of SoundManager or returns the singleton instance.
 * 
 * @class Singleton that manages sound loading and playing. By default there is a global reference called Sounds.
 * @property {SoundManager} instance The singlton instance.
 * @property {Array<Audio>} snds Array of loaded sounds indexed by their src.
 * @property {bool} muted The muted state of all sounds. Use toggleMuted() to change state.
 */
function SoundManager(){
	if(SoundManager.prototype.instance){
		return SoundManager.prototype.instance;
	}
	SoundManager.prototype.instance = this;
	this.snds = new Array();
	this.muted = false;
}

SoundManager.prototype.instance = null;
SoundManager.prototype.snds = new Array();
SoundManager.prototype.muted = false;

//Returns a sound if it is already loaded and there is a sound object that is not playing (creates a pool of sound objects), otherwise it starts loading the sound source and returns a new sound
SoundManager.prototype.load = function(src){
	if(this.snds[src] == undefined){
		Resources.addToLoad();
		this.snds[src] = new List();
		return Sounds.makeNewAudio(src, true);
	}
	for(var node = this.snds[src].head; node != null; node = node.link){
		var snd = node.item;
		//if(!snd.isPlaying){
		if(!snd.isPlaying || snd.currentTime == snd.duration){
			snd.src = src;
			return snd;
		}
	}
	return Sounds.makeNewAudio(src, false);
}

SoundManager.prototype.makeNewAudio = function(src, loading){
	var newAudio = new Audio();
	newAudio.loaded = false;
	newAudio.isPlaying = false;
	newAudio.muted = Sounds.muted;
	
	newAudio.addEventListener("canplaythrough", function(){ 
	//newAudio.oncanplaythrough = function(e){
		if(loading && !this.loaded){
			println(this.src+" loaded");
			Resources.leftToLoad--;
			this.loaded = true;
		}
	}
	, false);
	
	var audioProto = newAudio.constructor.prototype;
	newAudio.play = function(){
		this.isPlaying = true;
		audioProto.play.call(this);
	}
	newAudio.pause = function(){
		this.isPlaying = false;
		audioProto.pause.call(this);
	}
	newAudio.ended = function(){
		this.isPlaying = false;
		//println("ended");
		//Audio.pause.call(this);
	}
	newAudio.src = src;
	Sounds.snds[src].push(newAudio);
	return newAudio;
}

//Creates a new audio object
SoundManager.prototype.play = function(src){
	var audio = this.load(src);
	audio.play();
	//println(Sounds.snds[src].length);
	return audio;
}

SoundManager.prototype.loop = function(src){
	var audio = this.load(src);
	//audio.loop = true;
	audio.addEventListener('ended', function(){
		//audio.currentTime = 0;
		this.src = this.src;
		this.play();
	});
	audio.play();
	return audio;
}

SoundManager.prototype.toggleMuted = function(){
	this.muted = !this.muted;
	for(src in Sounds.snds){
	//for(var i=0; i < Sounds.snds.length; i++){
		Sounds.snds[src].foreach(toggleSounds,{});
	}
}

function toggleSounds(sound, params){
	sound.muted = Sounds.muted;
}

var Sounds = new SoundManager();

/**
 * Creates a new instance of FontManager or returns the singleton instance.
 * 
 * @class Singleton that manages font loading. By default there is a global reference called Fonts.
 * @property {FontManager} instance The singlton instance.
 * @property {Array<Div>} fonts Array of divs where the div's font is set to each loaded font indexed by font name.
 */
function FontManager(){
	if(FontManager.prototype.instance){
		return FontManager.prototype.instance;
	}
	FontManager.prototype.instance = this;
	this.fonts = new Array();
}

FontManager.prototype.instance = null;
FontManager.prototype.fonts = new Array();

/**
 * Makes sure the given font is loaded.
 * 
 * @param {string} fontName The font to be loaded.
 * @return {bool} True if the font is loaded.
 */ 
FontManager.prototype.load = function(fontName){
	if(Fonts.fonts[fontName] == undefined){
		Resources.addToLoad();
		var fontDiv = document.createElement("p");
		fontDiv.loaded = false;
		fontDiv.font = fontName;
		fontDiv.innerHTML = "AAAAAAAAAA";
		fontDiv.style.position = "absolute";
		fontDiv.style.visibility = "hidden";
		fontDiv.style.top = 0;
		fontDiv.style.display = "inline-block";
		fontDiv.style.font = "20px "+fontName+",cursive";
		fontDiv.checkIfLoaded = function(){
			document.body.appendChild(this);
			this.style.font = "20px Arial,cursive";
			println(this.offsetWidth);
			var preWidth = this.offsetWidth;
			this.style.font = "20px "+this.font+",cursive";
			println(this.offsetWidth);
			if(this.offsetWidth != preWidth){
				this.loaded = true;
				Resources.leftToLoad--;
				return true;
			}
			document.body.removeChild(this);
			return false;
		}
		Fonts.fonts[fontName] = fontDiv;
	}
	//return Fonts.fonts[fontName].checkIfLoaded();
}

var Fonts = new FontManager();

/**
 * Creates a new instance of FileManager or returns the singleton instance.
 * 
 * @class Singleton that manages file loading. By default there is a global reference called Files.
 * @property {FontManager} instance The singlton instance.
 * @property {Array<Object{text,xml}>} files Array of objects. Each object has a plain text (.text) version of the file as well as an XML (.xml) version.
 */
function FileManager(){
	if(FileManager.prototype.instance){
		return FileManager.prototype.instance;
	}
	FileManager.prototype.instance = this;
	this.files = new Array();
}

FileManager.prototype.instance = null;
FileManager.prototype.files = new Array();

/**
 * Returns an object with the file accessible through the text and xml properties if the file is loaded. Otherwise starts loading the files and returns the files object.
 * 
 * @param {Object} fileName
 * @param {Object} onLoadFunc
 */
FileManager.prototype.load = function(fileName, onLoadFunc){
	if(this.files[fileName] == undefined){
		this.files[fileName] = new Object();
		Resources.addToLoad();
		var xml = xmlRequest();
		xml.onreadystatechange = function(){
			if(xml.readyState == 4){
				Files.files[fileName].text = String(xml.responseText);
				Files.files[fileName].xml = xml.responseXML;
				//Files.files[fileName].onLoadComplete();
				if(onLoadFunc != null){
					onLoadFunc(Files.files[fileName]);
				}
				Resources.leftToLoad--;
			}
		}
		try{
			xml.open("GET",fileName,true);
			xml.send(null);
		}catch(e){
		}
	}
	return this.files[fileName];
}

var Files = new FileManager();

//http://www.w3schools.com/ajax/ajax_browsers.asp
function xmlRequest(){
	var xmlHttp;
	try{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer
		try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e){
			try{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	return xmlHttp;
}

//Based on the tutorials found here: http://learningwebgl.com/blog/?page_id=1217

//This has a lot of redundent code and needs to be cleaned up

//Global matrices
var mvMatrix = mat4.create();
var pMatrix = mat4.create();

//Default shader
var shaderProgram;
var vertShader;
var fragShader;
//Pointer to the current sprite shader, allows custome effects when drawing sprites (normal mapping)
var spriteShader;

//Sprite vertex buffers
var spriteVPB;
var spriteVTB;
var spriteVIB;

//Default draw buffers
var colorBuffer;
var stateBuffer;

//Holds a pool of screen buffers for use with screen shaders
var sBuffers = new Object();

//Define some global blending modes
BLEND_ALPHA = {a:"SRC_ALPHA", b:"ONE_MINUS_SRC_ALPHA"};
BLEND_ADD = {a:"SRC_ALPHA", b:"ONE"};
BLEND_MULTIPLY = {a:"DST_COLOR", b:"ZERO"};

//Initializes some WebGL stuff
function initGL(canvas){
	try{
		ctx.viewportWidth = canvas.width;
		ctx.viewportHeight = canvas.height;
		initBuffers(ctx);
		
		//Initialize default shader
		fragShader = compileShader(ctx, defaultFragSrc);
		vertShader = compileShader(ctx, defaultVertSrc);
		shaderProgram = createShaderProgram();
		setupSpriteShader(shaderProgram);
		spriteShader = shaderProgram;
		
		colorBuffer = createRenderTarget(ctx, canvas.width, canvas.height);
		stateBuffer = createRenderTarget(ctx, canvas.width, canvas.height);
		
		ctx.clearColor(0.0, 0.0, 0.0, 1.0);
		
		ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
		ctx.enable(ctx.BLEND);
	}catch(e){
	}
}

//Pushes the current matrices to the given vertex shader
function setMatrixUniforms(program){
	ctx.uniformMatrix4fv(program.pMatrixUniform, false, pMatrix);
	ctx.uniformMatrix4fv(program.mvMatrixUniform, false, mvMatrix);
}

//Pulls the shader source from the given embedded shader
function getShaderSrc(id){
	if(!use2D){
		var shaderScript = document.getElementById(id);
		if(!shaderScript){
			return null;
		}
		
		var code = "";
		var k = shaderScript.firstChild;
		while(k){
			if(k.nodeType == 3){
				code += k.textContent;
			}
			k = k.nextSibling;
		}
		var type;
		if(shaderScript.type == "x-shader/x-fragment"){
			type = "frag";
		}else if(shaderScript.type == "x-shader/x-vertex"){
			type = "vert";
		}else{
			return null;
		}
		
		return {code: code, type:type};
	}
	return null;
}

//Compiles a shader from the given source
function compileShader(gl, source){
	if(!use2D){
		if(!source){
			println("no src");
			return null;
		}
		
		var shader;
		if(source.type == "frag"){
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		}else if(source.type == "vert"){
			shader = gl.createShader(gl.VERTEX_SHADER);
		}else{
			println("no type: "+source.type);
			return null;
		}
		
		gl.shaderSource(shader, source.code);
		gl.compileShader(shader);
		
		if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
			alert(gl.getShaderInfoLog(shader));
			return null;
		}
		
		return shader;
	}
	return null;
}

//Creates a shader program
function createShaderProgram(fragSrc, vertSrc){
	if(!use2D){
		var frag;
		var vert;
		
		if(!fragSrc){
			frag = fragShader;
		}else{
			frag = compileShader(ctx, fragSrc);
		}
		
		if(!vertSrc){
			vert = vertShader;
		}else{
			vert = compileShader(ctx, vertSrc);
		}
		
		var newProgram = ctx.createProgram();
		ctx.attachShader(newProgram, vert);
		ctx.attachShader(newProgram, frag);
		ctx.linkProgram(newProgram);
		
		if(!ctx.getProgramParameter(newProgram, ctx.LINK_STATUS)){
			alert("Could not initiate shaders");
		}
		
		newProgram.vertexPositionAttribute = ctx.getAttribLocation(newProgram, "aVertexPosition");
		//println(newProgram.vertexPositionAttribute);
		ctx.bindAttribLocation(newProgram, 0, "aVertexPosition");
		ctx.enableVertexAttribArray(newProgram.vertexPositionAttribute);
		
		newProgram.textureCoordAttribute = ctx.getAttribLocation(newProgram, "aTextureCoord");
		ctx.enableVertexAttribArray(newProgram.textureCoordAttribute);
		
		newProgram.pMatrixUniform = ctx.getUniformLocation(newProgram, "uPMatrix");
		newProgram.mvMatrixUniform = ctx.getUniformLocation(newProgram, "uMVMatrix");
		
		return newProgram;
	}
	return null;
}

//Set up sprite shader helpers
function setupSpriteShader(program){
	if(!use2D){
		program.vertexPositionAttribute = ctx.getAttribLocation(program, "aVertexPosition");
		ctx.enableVertexAttribArray(program.vertexPositionAttribute);
		
		program.textureCoordAttribute = ctx.getAttribLocation(program, "aTextureCoord");
		ctx.enableVertexAttribArray(program.textureCoordAttribute);
		
		program.pMatrixUniform = ctx.getUniformLocation(program, "uPMatrix");
		program.mvMatrixUniform = ctx.getUniformLocation(program, "uMVMatrix");
		
		program.frameOffset = ctx.getUniformLocation(program, "frameOffset");
		program.frameDims = ctx.getUniformLocation(program, "frameDims");
		
		program.tiles = ctx.getUniformLocation(program, "tiles");
		program.scroll = ctx.getUniformLocation(program, "scroll");
		
		//shaderProgram.alphaMap = ctx.getUniformLocation(shaderProgram, "alphaMap");
		program.multColor = ctx.getUniformLocation(program, "multColor");
		program.alpha = ctx.getUniformLocation(program, "alpha");
	}
}

//Initializes the sprite vertex buffers
function initBuffers(gl){
	//Sprite
	spriteVPB = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, spriteVPB);
	var vertices = [
		0, -1, 0,
		1, -1, 0,
		1, 0, 0,
		0, 0, 0,
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	spriteVPB.itemSize = 3,
	spriteVPB.numItems = 4;
	
	spriteVTB = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, spriteVTB);
	var texCoords = [
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);
	spriteVTB.itemSize = 2;
	spriteVTB.numItems = 4;
	
	spriteVIB = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, spriteVIB);
	var spriteVertexIndices = [0, 1, 2,		0, 2, 3];
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(spriteVertexIndices), gl.STATIC_DRAW);
	spriteVIB.itemSize = 1;
	spriteVIB.numItems = 6;
}

//Creates a new render target, returns a screen buffer with a texture property
function createRenderTarget(gl, width, height){
	var rtBuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, rtBuffer);
	rtBuffer.width = width;
	rtBuffer.height = height;
	
	var rtTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, rtTexture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    //gl.generateMipmap(gl.TEXTURE_2D);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	
	var depthBuffer = gl.createRenderbuffer();
	gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
	
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, rtTexture, 0);
	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
	
	rtBuffer.texture = rtTexture;
    
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	return rtBuffer;
}

//Sets up a pool of screen buffers
sBuffers.buffers = new Array();

//Returns either the first unlocked buffer in the array or creates a new one, pushes it into the array, and returns it.
sBuffers.getBuffer = function(bwidth, bheight){
	for(var i=0; i < this.buffers.length; i++){
		if(!this.buffers[i].locked){
			//this.buffers[buf].locked = true;
			return this.buffers[i];
		}
	}
	var width = bwidth ? bwidth : canvas.width;
	var height = bheight ? bheight : canvas.height;
	var newBuffer = createRenderTarget(ctx, width, height);
	newBuffer.locked = false;
	newBuffer.lock = function(){
		this.locked = true;
	}
	newBuffer.unlock = function(){
		this.locked = false;
	}
	this.buffers.push(newBuffer);
	return newBuffer;
}

var defaultVertSrc = new Object();
defaultVertSrc.code = "attribute vec3 aVertexPosition; attribute vec2 aTextureCoord; uniform mat4 uMVMatrix; uniform mat4 uPMatrix; varying vec2 vTextureCoord; void main(void){ gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0); vTextureCoord = aTextureCoord; }";
defaultVertSrc.type = "vert";

var defaultFragSrc = new Object();
defaultFragSrc.code = "precision mediump float; varying vec2 vTextureCoord; uniform sampler2D uSampler; uniform vec2 frameOffset; uniform vec2 frameDims; uniform vec2 tiles; uniform vec2 scroll; uniform vec3 multColor; uniform float alpha; void main(void){ vec2 pos = mod((vTextureCoord+scroll)*tiles+vec2(0, 1.0-tiles.y),vec2(1.0,1.0)); pos = pos*frameDims; pos.y += (1.0-frameDims.y); pos.y -= frameOffset.y; pos.x += frameOffset.x; vec4 color = texture2D(uSampler, pos); gl_FragColor.rgb = color.rgb*multColor; gl_FragColor.a = color.a*alpha; }";
defaultFragSrc.type = "frag";

/**
 * Creates a new instance of PostFXChain.
 * 
 * @class A list of screen post processing effects to be applied in sequence.
 * @property {List} effects The list of effects.
 */
function PostFXChain(){
	this.effects = new List();
}

PostFXChain.prototype.effects = new List();

/**
 * Pushes effect onto the list. 
 * 
 * @param {Object} effect The effect to be added.
 */
PostFXChain.prototype.push = function(effect){
	this.effects.push(effect);
}

/**
 * Removes an effect from the list.
 *  
 * @param {Object} effect
 */
PostFXChain.prototype.remove = function(effect){
	this.effects.remove(effect);
}

/**
 * Runs through the list of effects applying each one to the input buffer.
 */
PostFXChain.prototype.apply = function(ctx, input){
	var effect;
	for(var node = this.effects.head; node != null; node = node.link){
		effect = node.item;
		if(effect != undefined && effect != null){
			effect.apply(ctx, input);
		}
	}
}

/**
 * Creates a new instance of PostFX.
 * 
 * @class The base class for post processing effects.
 */
function PostFX(){
}

/**
 * Applies the effect. 
 * @param {CanvasContext} ctx The drawing context.
 */
PostFX.prototype.apply = function(ctx){
}

/**
 * Creates a new instance of Sprite.
 * 
 * @class Simplifies the process of transforming, drawing, and updating sprites. Can be used to display images for any purpose including player characters and backgrounds.
 * Allows hierarchical grouping of sprites which can be used to create complex characters or systems out of individual sprites.
 * @property {number} alpha The transparency of the sprite. 1 is fully opaque and 0 is fully transparent.
 * @property {Object} blendFunc Setter/getter for sprite.blendFunction
 * @property {Object} blendFunction Specifies how the sprite should be blended with the canvas when drawing with webGL. Most common are: BLEND_ALPHA, BLEND_ADD, and BLEND_MULTIPLY. Custom functions can be specified as {a:"SRC_ALPHA", b:"ONE_MINUS_SRC_ALPHA"}. Other possible values can be found here http://www.opengl.org/sdk/docs/man/xhtml/glBlendFunc.xml
 * @property {string} blendMode Specifies how the sprite should be blended with the canvas when drawing with the 2D canvas.
 * @property {List<Sprite>} children A list of sprites that have been made children of this sprite.
 * @property {number} frame The current frame in an animated sprite.
 * @property {number} frameCount The number of frames in an animated sprite.
 * @property {number} frameHeight The height of an individual frame in an animated sprite.
 * @property {number} frameWidth The width of an individual frame in an animated sprite.
 * @property {number} height The unscaled height of the sprite.
 * @property {Image} image The image to be used when drawing this sprite. The easiest way to set this is: sprite.image = Textures.load("sprite.png")
 * @property {number} index Used to determine the order in which sprites should be drawn. The smaller the index the closer to the front the sprite will be.
 * @property {Vector} multColor Color to multiply the sprite by when drawing with webGL, allowing tinting. The 2D canvas does not support efficient pixel manipulation including color multiplication.
 * @property {Sprite} parent The sprite's parent sprite.
 * @property {Vector} pos The sprite's position relative to its parent's position.
 * @property {number} rotation The rotation of the sprite in radians. Use DTR(degreees) to easily convert degrees to radians.
 * @property {Shader} shader When drawing with webGL, if set this shader will be used to draw the sprite instead of the default shader.
 * @property {number} sliceHeight The height of the slice to be sampled within the sprite's image starting from sliceY. This allows drawing only portions of the image.
 * @property {number} sliceWidth The width of the slice to be sampled within the sprite's image starting from sliceX. This allows drawing only portions of the image.
 * @property {bool} visible If false the sprite will not be drawn and neither will its children. Does not affect updating.
 * @property {number} width The unscaled width of the sprite.
 * @property {number} worldRotation Setter/getter for sprite.rotation relative to the sprite's parent's rotation.
 * @property {number} xoffset The x position of the sprite's origin within the sprite. By default this is the top left corner.
 * @property {number} x Setter/getter for sprite.pos.x
 * @property {number} scaleX The amount to scale the sprite along the x axis.
 * @property {number} scrollX The distance to scroll the sprite's image within its bounds along the x axis.
 * @property {number} sliceX The x position within the sprite's image to start sampling from. This allows drawing only portions of the image.
 * @property {number} tilesX The number of times to tile the sprite's image within its bounds along the x axis. Allows decimal values.
 * @property {number} y Setter/getter for sprite.pos.y
 * @property {number} yoffset The y position of the sprite's origin within the sprite. By default this is the top left corner.
 * @property {number} scaleY The amount to scale the sprite along the y axis.
 * @property {number} scrollY The distance to scroll the sprite's image within its bounds along the y axis.
 * @property {number} sliceY The y position within the sprite's image to start sampling from. This allows drawing only portions of the image.
 * @property {number} tilesY The number of times to tile the sprite's image within its bounds along the y axis. Allows decimal values.
 * @property {number} z Setter/getter for sprite.pos.z
 */
function Sprite(){
	this.children = new List();
	this.image = new Image();
	this.pos = new Vector(0,0,0);
	this.index = 0;
	this.blendFunction = {a:"SRC_ALPHA", b:"ONE_MINUS_SRC_ALPHA"};
	this.multColor = new Vector(1,1,1);
	//this.parent = undefined;
	this.animations = new Array();
}

Sprite.prototype = {
	get x(){
		return this.pos.x;
	},
	set x(val){
		this.pos.x = val;
	},
	
	get y(){
		return this.pos.y;
	},
	set y(val){
		this.pos.y = val;
	},
	
	get z(){
		return this.pos.z;
	},
	set z(val){
		this.pos.z = val;
	},
	
	get worldRotation(){
		return this.parent ? this.parent.worldRotation+this.rotation : this.rotation;
	},
	set worldRotation(val){
		this.rotation = this.parent ? val-this.parent.worldRotation : val;
	},
	
	get blendFunc(){
		return this.blendFunction;
	},
	set blendFunc(func){
		this.blendFunction.a = func.a;
		this.blendFunction.b = func.b;
	},
}

Sprite.prototype.width = 100;
Sprite.prototype.height = 100;
Sprite.prototype.xoffset = 0;
Sprite.prototype.yoffset = 0;
Sprite.prototype.scaleX = 1.0;
Sprite.prototype.scaleY = 1.0;
Sprite.prototype.rotation = 0;
Sprite.prototype.frameCount = 1;
Sprite.prototype.frameWidth = -1;
Sprite.prototype.frameHeight = -1;
Sprite.prototype.frame = 0;
Sprite.prototype.frameRate = 30;
Sprite.prototype.tilesX = 1;
Sprite.prototype.tilesY = 1;
Sprite.prototype.scrollX = 0;
Sprite.prototype.scrollY = 0;
Sprite.prototype.sliceX = 0;
Sprite.prototype.sliceY = 0;
Sprite.prototype.sliceWidth = undefined;
Sprite.prototype.sliceHeight = undefined;
Sprite.prototype.visible = true;
Sprite.prototype.alpha = 1.0;
Sprite.prototype.preAlpha = 1.0;
Sprite.prototype.blendMode = "source-over";
//Sprite.prototype.parent = new Sprite();
Sprite.prototype.childindex = 0;
Sprite.prototype.index = 0;
Sprite.prototype.children = new List();
Sprite.prototype.shader = null;
Sprite.prototype.animations = new Array();
Sprite.prototype.animation = null;

//When inheriting from sprite, call this in the new object's constructor
/**
 * This function is needed to prevent sprites from sharing the same property references.
 * @deprecated Use Sprite.call(this) instead.
 */
Sprite.prototype.init = function(){
	this.children = new List();
	this.image = new Image();
	this.pos = new Vector(0,0,0);
	this.multColor = new Vector(1,1,1);
}

/**
 * Adds the given sprite as a child of this one.
 * 
 * @param {Sprite} child The sprite to make a child.
 */
Sprite.prototype.addChild = function(child){
	//child.childindex = this.children.length;
	this.children.push(child);
	child.parent = this;
}

/**
 * Removes the given child from this sprite's children.
 * 
 * @param {Sprite} child The sprite to be removed.
 */
Sprite.prototype.removeChild = function(child){
	this.children.remove(child);
}

/**
 * Called before drawing to apply the sprite's transformations.
 * 
 * @param {Drawing Context} ctx
 */
Sprite.prototype.transform = function(ctx){
	ctx.save();
	this.preAlpha = ctx.alpha;
	ctx.alpha *= this.alpha;

	var xpos = this.x;
	var ypos = this.y;
	
	var scaleX = this.scaleX == 0 ? 0.0000001 : this.scaleX;
	var scaleY = this.scaleY == 0 ? 0.0000001 : this.scaleY;
	
	ctx.translate(xpos,ypos);
	ctx.rotate(this.rotation);
	ctx.scale(scaleX,scaleY);
}

/**
 * Draws the sprite to the given drawing context. This can be overidden for custom drawing, just make sure to call this.drawChildren(ctx); at the end of the custom function.
 * 
 * @param {Drawing Context} ctx
 */
Sprite.prototype.draw = function(ctx){
	if(this.image != undefined && this.image != null){
		try{
			if(this.frameCount <= 1){
				ctx.drawSprite(this);
			}else{
				ctx.drawSprite(this, this.frame);
			}
		}catch(e){
			//println("image isn't loaded");
		}
	}
	this.drawChildren(ctx);
}

/**
 * Calls transform, draw, and unTransform on the sprites children.
 * 
 * @param {Object} ctx
 */
Sprite.prototype.drawChildren = function(ctx){
	var sprites = new Array();
	for(var child = this.children.head; child !== null; child = child.link){
		var sprite = child.item;
		if(sprite.visible){
			sprites.push(sprite);
		}
	}
	sprites.sort(sortByZ);
	for(var i=0; i < sprites.length; i++){
		sprites[i].transform(ctx);
		sprites[i].draw(ctx);
		sprites[i].unTransform(ctx);
	}
}

/**
 * Called after drawing to unapply the sprite's transformations.
 * 
 * @param {Object} ctx
 */
Sprite.prototype.unTransform = function(ctx){
	ctx.restore();
	/*var xpos = this.x;
	var ypos = this.y;
	
	var scaleX = this.scaleX == 0 ? 0.0000001 : this.scaleX;
	var scaleY = this.scaleY == 0 ? 0.0000001 : this.scaleY;
	
	ctx.translate(-this.offsetX,-this.offsetY);
	ctx.scale(1/scaleX,1/scaleY);
	ctx.rotate(-this.rotation);
	ctx.translate(-xpos,-ypos);*/
	
	ctx.alpha = this.preAlpha;
}

//If overriding update make sure to call either Sprite.update.call(this, ctx) or this.prototype.update.call(this, ctx) or just call updateChildren(ctx)
/**
 * The default update function called every update. Does nothing by default except call updateChildren. When overriding make sure to call Sprite.update.call(this, ctx), this.prototype.update.call(this, ctx), or this.updateChildren(ctx).
 * 
 * @param {number} delta Time since the last update.
 */
Sprite.prototype.update = function(delta){
	this.updateChildren(delta);
}

/**
 * Calls update on the sprite's children.
 *  
 * @param {number} delta Time since the last update.
 */
Sprite.prototype.updateChildren = function(delta){
	this.children.foreach(this.updateChild, {delta:delta});
}

Sprite.prototype.updateChild = function(child, params){
	if(child.animate != undefined && child.animate != null){
		child.animate(params.delta);
	}
	if(child.update != undefined && child.update != null){
		child.update(params.delta);
	}
}

/**
 * Adds a new animation that is a range of frames in the sprite's spritesheet.
 * 
 * @param {string} name The name of the animation.
 * @param {number} first The first frame of the animation. 
 * @param {number} length The length of the animation
 */
Sprite.prototype.addAnimation = function(name, first, length){
	this.animations[name] = {first:first, last:Math.max(0, first+length-1)};
}

/**
 * Removes an animation.
 * 
 * @param {string} name The name of the animation.
 */
Sprite.prototype.removeAnimation = function(name){
	this.animations[name] = null;
}

/**
 * Automatically associates frames with animations
 * 
 * @param {Array<string>} names An array of the names of the animations.
 * @param {Array<number>} lengths An array of the lengths of each animation.
 */
Sprite.prototype.addAnimations = function(names, lengths){
	var first = 0;
	for(var i = 0; i < names.length; i++){
		this.animations[names[i]] = {first:first, last:first+lengths[i]-1};
		first = first+lengths[i];
	}
}


/**
 * Increments the sprite's frame according to the specified frameRate
 *  
 * @param {number} delta Time since the last update.
 */
Sprite.prototype.animate = function(d){
	this.frame = this.frame+(this.frameRate/FPS)*d;
	if(this.frame != 0){
		this.frame = (this.frame/Math.abs(this.frame))*(Math.abs(this.frame)%this.frameCount);
	}
	if(this.frame < 0){
		this.frame += this.frameCount;
	}
	
	if(exists(this.animation)){
		var animation = this.animations[this.animation];
		if(exists(animation)){
			var first = animation.first;
			var last = animation.last;
			if(this.frame > last){
				this.frame = first;
			}else if(this.frame < first){
				this.frame = last;
			}
		}
	}
}

/**
 * Returns the x scale relative to the sprite's parent's scale.
 * 
 * @return {number} The world x scale.
 */
Sprite.prototype.getscaleX = function(){
	if(this.parent != undefined){
		return this.parent.getscaleX()*this.scaleX;
	}
	return this.scaleX;
}

/**
 * Returns the y scale relative to the sprite's parent's scale.
 * 
 * @return {number} The world y scale.
 */
Sprite.prototype.getscaleY = function(){
	if(this.parent != undefined){
		return this.parent.getscaleY()*this.scaleY;
	}
	return this.scaleY;
}

/**
 * Returns a transformation matrix for the sprite's transformation in world space.
 * 
 * @return {mat4} Transformation matrix giving this sprite's position in world space.
 */
Sprite.prototype.getWorldMatrix = function(){
	var mat = mat4.create();
	mat4.identity(mat);
	if(this.parent != undefined){
		mat = this.parent.getWorldMatrix();
	}
	mat4.translate(mat,[this.x,this.y, this.z]);
	mat4.rotateZ(mat, this.rotation);
	mat4.scale(mat, [this.scaleX,this.scaleY, 1.0]);
	return mat;
}

/**
 * Returns the sprite's position in world space.
 * 
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.getWorldPos = function(){
	return mat4.multiplyVec3(this.getWorldMatrix(), [0,0,0]);
}

/**
 * Returns the world position of a local point.
 * 
 * @param {number} x The x coordinate within the sprite.
 * @param {number} y The y coordinate within the sprite.
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.localToWorld = function(x,y){
	return mat4.multiplyVec3(this.getWorldMatrix(), [x,y,0]);
}

/**
 * Returns the given world position as a point within the sprite.
 * 
 * @param {number} x The x coordinate in world space.
 * @param {number} y The y coordinate in world space.
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.worldToLocal = function(x,y){
	var pos = vec3.subtract([x,y,0], this.getWorldPos());
	var scaleX = this.scaleX == 0 ? 0.0000001 : this.scaleX;
	var scaleY = this.scaleY == 0 ? 0.0000001 : this.scaleY;
	var mat = mat4.scale(mat4.rotateZ(mat4.identity(mat4.create()), -this.worldRotation), [this.getscaleX(),this.getscaleY(), 1.0]);
	return mat4.multiplyVec3(mat, pos);
}

/**
 * Calls remove on all of the sprite's children and removes itself from its parent's list of children.
 */
Sprite.prototype.remove = function(){
	for(var child = this.children.head; child !== null; child = child.link){
		child.item.remove();
	}
	if(this.parent != undefined){
		this.parent.removeChild(this);
	}
}

function sortByZ(a,b){
	return b.index-a.index;
}

/**
 * Creates a new instance of BBox.
 * 
 * @class BBox is a bounding volume for simple 3D collision detection.
 * @param {number} x The initial x position of the BBox.
 * @param {number} y The initial y position of the BBox.
 * @param {number} z The initial z position of the BBox.
 * @param {number} width The width of the BBox.
 * @param {number} height The height of the BBox.
 * @param {number} depth The depth of the BBox.
 * 
 * @property {number} x The x position of the BBox.
 * @property {number} y The y position of the BBox.
 * @property {number} z The z position of the BBox.
 * @property {number} width The width of the BBox.
 * @property {number} height The height of the BBox.
 * @property {number} depth The depth of the BBox.
 */
function BBox(x,y,z,width,height,depth){
	this.pos = new Vector(x,y,z);
	this.dims = new Vector(width,height,depth);
	this.offsets = new Vector(0,0,0);
	this.vel = new Vector(0,0,0);
	this.solid = false;
}

BBox.prototype = {
	get x(){
		return this.pos.x;
	},
	set x(val){
		this.pos.x = val;
	},
	
	get y(){
		return this.pos.y;
	},
	set y(val){
		this.pos.y = val;
	},
	
	get z(){
		return this.pos.z;
	},
	set z(val){
		this.pos.z = val;
	},
	
	get width(){
		return this.dims.x;
	},
	set width(val){
		this.dims.x = val;
	},
	
	get height(){
		return this.dims.y;
	},
	set height(val){
		this.dims.y = val;
	},
	
	get depth(){
		return this.dims.z;
	},
	set depth(val){
		this.dims.z = val;
	},
}

/**
 * Checks to if the given point is within the bounding volume. 
 * 
 * @param {Vector} point The point to check against the bounding volume.
 * @return {bool} True if the point is in the BBox, false otherwise.
 */
BBox.prototype.checkPoint = function(point){
	var xpos = this.pos.x+this.offsets.x;
	var ypos = this.pos.y+this.offsets.y;
	var zpos = this.pos.z+this.offsets.z;
	var minx = xpos-this.dims.x/2;
	var maxx =xpos+this.dims.x/2;
	var minz = zpos-this.dims.z/2;
	var maxz = zpos+this.dims.z/2;
	var miny = ypos-this.dims.y/2;
	var maxy = ypos+this.dims.y/2;
	if(point.x >= minx && point.x <= maxx && point.z >= minz && point.z <= maxz && point.y >= miny && point.y <= maxy){
		return true;
	}
	return false;
}

/**
 * Checks for intersections between the given and testing BBoxs. This function is incomplete as it really should return more useful imformation.
 * 
 * @param {BBox} bbox The BBox to check for intersextions with.
 * @return {Object} Collision object with the boolean property occurred. If occurred is true it will also have the property normal which is useless as it always return (0,0,1).
 */
BBox.prototype.checkBBox = function(bbox){
	var col = {occurred:false};
	var points = bbox.getPoints();
	for(var point in points){
		if(this.checkPoint(points[point])){
			col.occurred = true;
			col.normal = new Vector(0,0,1);
			return col;
		}
	}
	return col;
}

/**
 * Checks for intersections between the given and testing BBoxs. This function is incomplete as it really should return more useful imformation. Unlike checkBBox, this function checks the volumes against each other.
 * 
 * @param {BBox} bbox The BBox to check for intersextions with.
 * @return {Object} Collision object with the boolean property occurred. If occurred is true it will also have the property normal which is useless as it always return (0,0,1).
 */
BBox.prototype.intersect = function(bbox){
	var col = {occurred:false};
	var points = bbox.getPoints();
	for(var point in points){
		if(this.checkPoint(points[point])){
			col.occurred = true;
			col.normal = new Vector(0,0,1);
			return col;
		}
	}
	points = this.getPoints();
	for(var point in points){
		if(bbox.checkPoint(points[point])){
			col.occurred = true;
			col.normal = new Vector(0,0,1);
			return col;
		}
	}
	return col;
}

/**
 * Returns the eight points that define the volume relative to the BBox's position
 * 
 * @return {Array<Vector>} An array of eight points defining the volume.
 */
BBox.prototype.getPoints = function(){
	var points = new Array();
	var point = this.pos.add(this.offsets).add(this.dims.div(2));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims.div(-2));
	points.push(point);
	
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(2,2,-2)));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(-2,2,2)));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(-2,2,-2)));
	points.push(point);
	
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(2,-2,2)));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(-2,-2,2)));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims.div(new Vector(2,-2,-2)));
	points.push(point);
	return points;
}

/**
 * Creates an instance of BRect.
 * 
 * @class BRect is a bounding area for simple 2D collision detection.
 * @param {number} x The initial x position of the BRect.
 * @param {number} y The initial y position of the BRect.
 * @param {number} width The width of the BRect.
 * @param {number} height The height of the BRect.
 * 
 * @property {number} x The x position of the BBox.
 * @property {number} y The y position of the BBox.
 * @property {number} width The width of the BBox.
 * @property {number} height The height of the BBox.
 */
function BRect(x,y,width,height){
	this.pos = new Vector(x,y,0);
	this.dims = new Vector(width,height,0);
	this.offsets = new Vector(0,0,0);
	this.solid = false;
}

BRect.prototype = new BBox();

/**
 * Checks to see if a point is within the bounding area. 
 * 
 * @param {Vector} point The point to check against the bounding area.
 * @return {bool} True if the point is in the BRect, false otherwise.
 */
BRect.prototype.checkPoint = function(point){
	var xpos = this.pos.x+this.offsets.x;
	var ypos = this.pos.y+this.offsets.y;
	var minx = xpos;//-this.dims.x/2;
	var maxx = xpos+this.dims.x;//+this.dims.x/2;
	var miny = ypos;//-this.dims.y/2;
	var maxy = ypos+this.dims.y;//+this.dims.y/2;
	if(point.x >= minx && point.x <= maxx && point.y >= miny && point.y <= maxy){
		return true;
	}
	return false;
}

/**
 * Returns the four points that define the volume relative to the BBox's position
 * 
 * @return {Array<Vector>} An array of four points defining the volume. 
 */
BRect.prototype.getPoints = function(){
	var points = new Array();
	var point = this.pos.add(this.offsets);//.add(this.dims.div(2));
	points.push(point);
	point = this.pos.add(this.offsets).add(this.dims);
	points.push(point);
	
	point = this.pos.add(this.offsets).add(new Vector(this.dims.x,0,0));
	points.push(point);
	point = this.pos.add(this.offsets).add(new Vector(0,this.dims.y,0));
	points.push(point);
	return points;
}

/**
 * Creates an instance of CollisionGrid.
 * 
 * @class CollisionGrid is used to perform grid based collision detection. This was originally for an isometric game so it's set in the XZ plane, but it's just a 2D grid so it can be used for collisions in screen space as well.
 * @param {number} x X position of the grid in world space.
 * @param {number} z Z (Y) position of the grid in world space.
 * @param {number} width Width of the grid.
 * @param {number} depth Depth of the grid.
 * @param {number} cols	Number of horizontal cells.
 * @param {number} rows	Number of vertical cells.
 */
function CollisionGrid(x, z, width, depth, cols, rows){
	this.x = x;
	this.z = z;
	this.width = width;
	this.depth = depth;
	this.cols = cols;
	this.rows = rows;
	this.size = cols*rows;
	this.cells = new Array();
	for(var i = 0; i < this.size; i++){
		this.cells.push(new List());
	}
	this.visible = false;
}

/**
 * Resets the grid to an initial state.
 *  
 * @param {Object} x X position of the grid in world space.
 * @param {Object} z Z (Y) position of the grid in world space.
 * @param {number} width Width of the grid.
 * @param {number} depth Depth of the grid.
 * @param {number} cols	Number of horizontal cells.
 * @param {number} rows	Number of vertical cells.
 */
CollisionGrid.prototype.reset = function(x, z, width, depth, cols, rows){
	this.x = x;
	this.z = z;
	this.width = width;
	this.depth = depth;
	this.cols = cols;
	this.rows = rows;
	this.size = cols*rows;
	this.cells = new Array();
	for(var i = 0; i < this.size; i++){
		this.cells.push(new List());
	}
}

/**
 * Determines which cell in the grid a collision object is in and adds it to that cell's list of objects.
 *  
 * @param {Object} obj An object that can be checked against other objects for collisions.
 */
CollisionGrid.prototype.insert = function(obj){
	var xdiff = obj.x-this.x;
	var zdiff = obj.z-this.z;
	var x = Math.max(0, Math.min(this.cols-1, Math.floor(xdiff/(this.width/this.cols))));
	var z = Math.max(0, Math.min(this.rows-1, Math.floor(zdiff/(this.depth/this.rows))))*this.cols;
	var index = Math.max(0, Math.min(this.size-1, x+z));
	//println(index);
	this.cells[index].push(obj);
}

/**
 * Empties the cell list of all inserted objects.
 */
CollisionGrid.prototype.clear = function(){
	for(var cell in this.cells){
		this.cells[cell] = new List();
	}
}

/**
 * Function stub. 
 * @param {number} delta time since last update.
 */
CollisionGrid.prototype.update = function(delta){
}

/**
 * Function stub. 
 * @param {number} delta time since last update.
 */
CollisionGrid.prototype.transform = function(ctx){
}

/**
 * Function stub. 
 * @param {number} delta time since last update.
 */
CollisionGrid.prototype.unTransform = function(ctx){
}

/**
 * Function stub. 
 * @param {number} delta time since last update.
 */
CollisionGrid.prototype.draw = function(ctx){
}

var gInput = new Input();

/**
 * Creates a new instance of Input.
 * 
 * @class The Input class wraps keyboard and mouse input into one object making it easier to listen for key and mouse actions.
 * @property {Vector} mouse The screenspace mouse coordinates relative to the top left corner of the game canvas.
 * @property {bool} shift Is the shift key pressed.
 * @property {bool} lBtn Is the left mouse button pressed.
 * @property {bool} mBtn Is the middle mouse button pressed.
 * @property {bool} rBtn Is the right mouse button pressed.
 */
function Input(){
	this.printKey = false;
	this.keys = new Array();
	this.bools = new Array();
	this.funcs = new Array();
	this.repeats = new Array();
	this.mouse = new Vector(0,0,0);
	this.shift = false;
	this.lBtn = false;
	this.mBtn = false;
	this.rBtn = false;
	this.lBtnFuncs = new Array();
	this.mBtnFuncs = new Array();
	this.rBtnFuncs = new Array();
	this.mdListens = new Array();
	this.muListens = new Array();
	this.mmListens = new Array();
	this.keyListens = new Array();
}

/**
 * Sets all bools to false.
 */
Input.prototype.blur = function(){
	//for(bool in this.bools){
	for(var i=0; i < this.bools.length; i++){
		this.bools[i] = false;
	}
}

/**
 * Adds a key-bool set. When the given key is pressed the bool is set to true and set to false when it is released.
 * 
 * @param {number} keyCode The keyCode of the key to be pressed. (If you don't know the keycode open the console with `/~ and then press insert to start tracing key presses)
 * @param {string} boolName The name of the new bool. Bools can be accessed like object properties (eg input.thisIsABool)
 */
Input.prototype.addBool = function(keyCode, boolName){
	this.keys[keyCode] = boolName;
	this.bools[boolName] = false;
	/*this.__defineGetter__(boolName, function(){
		return this.bools[boolName];
	});*/
	Object.defineProperty(this, boolName, {
		get: function(){
			return this.bools[boolName];
		}
	});
}

/**
 * Removes a defined bool.
 * 
 * @param {string} boolName The name of the new bool to be removed.
 */
Input.prototype.removeBool = function(boolName){
	delete this[boolName];
	for(var key in this.keys){
		if(this.keys[key] == boolName){
			this.keys[key] = null;
			break;
		}
	}
}

/**
 * Adds a function to be called when the given key is pressed. Repeats until released if repeat is true.
 * 
 * @param {number} keyCode The keyCode of the key to be pressed. (If you don't know the keycode open the console with `/~ and then press insert to start tracing key presses)
 * @param {function} func The function to be called when the given key is pressed.
 * @param {bool} repeat Should the function be called repeatedly until the key is released.
 */
Input.prototype.addFunc = function(keyCode, func, repeat){
	this.funcs[keyCode] = func;
	this.repeats[keyCode] = repeat;
}

/**
 * Removes a function set to be called on a keypress.
 * 
 * @param {function} func The function to be removed.
 */
Input.prototype.removeFunc = function(func){
	for(var f in this.funcs){
		if(this.funcs[f] == func){
			this.funcs[f] = null;
			this.repeats[f] = false;
			break;
		}
	}
}

/**
 * Adds a function to be called when the left mouse button is pressed.
 * 
 * @param {function} func A function to be called.
 */
Input.prototype.addLBtnFunc = function(func){
	this.lBtnFuncs.push(func);
}

/**
 * Removes a function to be called when the left mouse button is pressed.
 * 
 * @param {function} func The function to be removed.
 */
Input.prototype.removeLBtnFunc = function(func){
	for(var f in this.lBtnFuncs){
		if(this.lBtnFuncs[f] == func){
			this.lBtnFuncs[f] = null;
			break;
		}
	}
}


/**
 * Adds a function to be called when the middle mouse button is pressed.
 * 
 * @param {function} func A function to be called.
 */
Input.prototype.addMBtnFunc = function(func){
	this.mBtnFuncs.push(func);
}

/**
 * Removes a function to be called when the middle mouse button is pressed.
 * 
 * @param {function} func The function to be removed.
 */
Input.prototype.removeMBtnFunc = function(func){
	for(var f in this.mBtnFuncs){
		if(this.mBtnFuncs[f] == func){
			this.mBtnFuncs[f] = null;
			break;
		}
	}
}

/**
 * Adds a function to be called when the right mouse button is pressed.
 * 
 * @param {function} func A function to be called.
 */
Input.prototype.addRBtnFunc = function(func){
	this.rBtnFuncs.push(func);
}

/**
 * Removes a function to be called when the right mouse button is pressed.
 * 
 * @param {function} func The function to be removed.
 */
Input.prototype.removeRBtnFunc = function(func){
	for(var f in this.rBtnFuncs){
		if(this.rBtnFuncs[f] == func){
			this.rBtnFuncs[f] = null;
			break;
		}
	}
}

/**
 * Adds an object to be notified when a mouse button is pressed. The object must have the function onMouseDown(buttonNumber).
 * 
 * @param {Object} obj An object with an onMouseDown function.
 */
Input.prototype.addMouseDownListener = function(obj){
	this.mdListens.push(obj);
}

/**
 * Removes an object from the list of objects to be notified when a mouse button is pressed.
 * 
 * @param {Object} obj The object to be removed.
 */
Input.prototype.removeMouseDownListener = function(obj){
	for(var o in this.mdListens){
		if(this.mdListens[o] == obj){
			this.mdListens[o] = null;
			break;
		}
	}
}

/**
 * Adds an object to be notified when a mouse button is released. The object must have the function onMouseUp(buttonNumber).
 * 
 * @param {Object} obj An object with an onMouseUp function.
 */
Input.prototype.addMouseUpListener = function(obj){
	this.muListens.push(obj);
}

/**
 * Removes an object from the list of objects to be notified when a mouse button is released.
 * 
 * @param {Object} obj The object to be removed.
 */
Input.prototype.removeMouseUpListener = function(obj){
	for(var o in this.muListens){
		if(this.muListens[o] == obj){
			this.muListens[o] = null;
			break;
		}
	}
}

/**
 * Adds an object to be notified when the mouse is moved. The object must have the function onMouseMove().
 * 
 * @param {Object} obj An object with an onMouseMove function.
 */
Input.prototype.addMouseMoveListener = function(obj){
	this.mmListens.push(obj);
}

/**
 * Removes an object from the list of objects to be notified when the mouse is moved.
 * 
 * @param {Object} obj The object to be removed.
 */
Input.prototype.removeMouseMoveListener = function(obj){
	for(var o in this.mmListens){
		if(this.mmListens[o] == obj){
			this.mmListens[o] = null;
			break;
		}
	}
}

Input.prototype.setMouse = function(x, y){
	this.mouse.x = x-canvas.offsetLeft;
	this.mouse.y = y-canvas.offsetTop;
	
	if(display != undefined && display.style.position == "relative"){
		this.mouse.x -= display.offsetLeft;
		this.mouse.y -= display.offsetTop;
	}
	
	this.mouse.x /= canvas.scaleX;
	this.mouse.y /= canvas.scaleY;
}

/**
 * Adds an object to be notified when a key is pressed. The object must have the function onKeyDown(key).
 * 
 * @param {Object} obj An object with an onKeyDown function.
 */
Input.prototype.addKeyboardListener = function(obj){
	this.keyListens.push(obj);
}

/**
 * Removes an object from the list of objects to be notified when a key is pressed.
 * 
 * @param {Object} obj The object to be removed.
 */
Input.prototype.removeMouseMoveListener = function(obj){
	for(var o in this.keyListens){
		if(this.keyListens[o] == obj){
			this.keyListens[o] = null;
			break;
		}
	}
}

Input.prototype.mouseMove = function(e){
	if(!e) e = window.event;
	this.setMouse(e.pageX, e.pageY);
	
	//for(var obj in this.mmListens){
	for(var obj = 0; obj < this.mmListens.length; obj++){
		this.mmListens[obj].onMouseMove();
	}
	return false;
}

Input.prototype.mouseDown = function(e){
	if(!e) e = window.event;
	switch(e.button){
		case 0:
			this.lBtn = true;
			break;
		case 1:
			this.mBtn = true;
			break;
		case 2:
			this.rBtn = true;
			break;
		default:
			break;
	}
	this.setMouse(e.pageX, e.pageY);
	//for(var obj in this.mdListens){
	for(var obj = 0; obj < this.mdListens.length; obj++){
		if(this.mdListens[obj] != null){
			this.mdListens[obj].onMouseDown(e.button);
		}
	}
	return false;
}

Input.prototype.mouseUp = function(e){
	if(!e) e = window.event;
	//println(e.button);
	switch(e.button){
		case 0:
			this.lBtn = false;
			//for(var func in this.lBtnFuncs){
			for(var func = 0; func < this.lBtnFuncs.length; func++){
				if(this.lBtnFuncs[func] != null){
					this.lBtnFuncs[func]();
				}
			}
			break;
		case 1:
			this.mBtn = false;
			//for(var func in this.mBtnFuncs){
			for(var func = 0; func < this.mBtnFuncs.length; func++){
				if(this.mBtnFuncs[func] != null){
					this.mBtnFuncs[func]();
				}
			}
			break;
		case 2:
			this.rBtn = false;
			//for(var func in this.rBtnFuncs){
			for(var func = 0; func < this.rBtnFuncs.length; func++){
				if(this.rBtnFuncs[func] != null){
					this.rBtnFuncs[func]();
				}
			}
			break;
		default:
			break;
	}
	this.setMouse(e.pageX, e.pageY);
	
	//for(var obj in this.muListens){
	for(var obj = 0; obj < this.muListens.length; obj++){
		if(this.muListens[obj] != null){
			this.muListens[obj].onMouseUp(e.button);
		}
	}
	return false;
}

Input.prototype.handleKeyDown = function(e){
	var key = e.keyCode;
	if(this.printKey){
		println("down: "+key);//+": "+e.keyIdentifier);
	}
	if(key == 16){
		this.shift = true;
	}
	if(this.keys[key] != undefined && this.keys[key] != null){
		this.bools[this.keys[key]] = true;
	}
	if(this.funcs[key] != undefined && this.funcs[key] != null){
		if(this.repeats[key]){
			this.funcs[key]();
		}
	}
	//for(var obj in this.keyListens){
	for(var obj=0; obj < this.keyListens.length; obj++){
		if(this.keyListens[obj] != null){
			this.keyListens[obj].onKeyDown(key);
		}
	}
	//Event.stop(e);
	if(e.keyCode == 32){
		e.preventDefault();
		e.space = true;
		this.handleKeyPress(e);
	}
	if(e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
		e.preventDefault();
	}
	//this.handleKeyPress(e);
	//e.returnValue = (e.keyCode != 8);
	//e.returnValue = !(e.keyCode == 8 || e.keyCode == 32);
	//this.handleKeyPress(e);
	//e.keyCode = 0;
	//println(window.event);
	//return e.keyCode != 8;
}
Input.prototype.handleKeyUp = function(e){
	var key = e.keyCode;
	if(this.printKey){
		println("up: "+key);
	}
	if(key == 16){
		this.shift = false;
	}
	if(this.keys[key] != undefined && this.keys[key] != null){
		this.bools[this.keys[key]] = false;
	}
	if(this.funcs[key] != undefined && this.funcs[key] != null){
		if(!this.repeats[key]){
			this.funcs[key]();
		}
	}
}
Input.prototype.handleKeyPress = function(e){
	var key = e.which;
	if(key == 32 && !e.space){
		return true;
	}
	if(this.printKey){
		println("press: "+key);
	}
	//for(var obj in this.keyListens){
	for(var obj = 0; obj < this.keyListens.length; obj++){
		if(this.keyListens[obj] != null){
			this.keyListens[obj].onKeyPress(key);
		}
	}
	if(e.keyCode == 8 || e.keyCode == 32){
		//e.preventDefault();
	}
}

/**
 * Creates a new canvas based GUI. These are more limited than HTML GUIs but may be desireable in some cases (eg you want post processes to affect some text).
 * Registers some listeners with the given input object.
 * 
 * @constructor
 * @param {Input} The input object that this GUI should use for input listeners.
 */
function GUI(input){
	this.init();
	this.input = input;
	input.addMouseDownListener(this);
	input.addMouseUpListener(this);
	input.addMouseMoveListener(this);
	input.addKeyboardListener(this);
}

GUI.prototype = new Sprite();
GUI.prototype.focus = null;

/**
 * Internal engine function.
 * Called while the left mouse button is pressed. 
 */
GUI.prototype.onMouseDown = function(button){
	if(this.visible){
		if(button == 0){
			if(this.focus != null){
				this.focus.focused = false;
				this.focus.blur();
				this.focus = null;
			}
			this.children.foreach(this.childMouseDown, {gui:this, mouse:this.input.mouse.sub(this.pos)});
		}
	}
}

/**
 * Internal engine function.
 * Called by onMouseDown.
 */
GUI.prototype.childMouseDown = function(child, params){
	if(child.onMouseDown != undefined){
		if(child.bbox.checkPoint(params.mouse)){
			params.gui.focus = child;
			child.focused = true;
			child.focus();
			child.onMouseDown();
		}
	}
}

/**
 * Internal engine function.
 * Called when the left mouse button is released. 
 */
GUI.prototype.onMouseUp = function(button){
	//println(this.children);
	if(this.visible){
		if(button == 0){
			/*if(this.focus != null){
				this.focus.focused = false;
				this.focus.blur();
				this.focus = null;
			}*/
			this.children.foreach(this.childMouseUp, {gui:this, mouse:this.input.mouse.sub(this.pos)});
		}
	}
}

/**
 * Internal engine function.
 * Called by onMouseUp.
 */
GUI.prototype.childMouseUp = function(child, params){
	if(child.onMouseUp != undefined){
		if(child.bbox.checkPoint(params.mouse)){
			//params.gui.focus = child;
			child.onMouseUp();
			//child.focused = true;
			//child.focus();
		}else{
			child.blur();
		}
	}
}

/**
 * Internal engine function.
 * Called when the mouse is moved. 
 */
GUI.prototype.onMouseMove = function(){
	if(this.visible){
		this.children.foreach(this.childMouseMove, {mouse:this.input.mouse.sub(this.pos)});
	}
}

/**
 * Internal engine function.
 * Called by onMouseMove.
 */
GUI.prototype.childMouseMove = function(child, params){
	if(child.onMouseIn != undefined && child.onMouseOut != undefined){
		if(child.bbox.checkPoint(params.mouse)){
			child.onMouseIn();
		}else{
			child.onMouseOut();
		}
	}
}

/**
 * Internal engine function.
 * Called when a key is held down. 
 */
GUI.prototype.onKeyDown = function(key){
	if(this.visible){
		//this.children.foreach(this.childKeyDown, {mouse:this.input.mouse.sub(this.pos)});
		//println(this.focus);
		if(this.focus != null  && this.focus.onKeyDown){
			this.focus.onKeyDown(key);
		}
	}
}

/**
 * Internal engine function.
 * Called when a key is pressed. 
 */
GUI.prototype.onKeyPress = function(key){
	if(this.visible){
		//this.children.foreach(this.childKeyDown, {mouse:this.input.mouse.sub(this.pos)});
		//println(this.focus);
		if(this.focus != null && this.focus.onKeyPress){
			this.focus.onKeyPress(key);
		}
	}
}

/**
 * Creates a generic GUI element.
 * 
 * @class This is the base class for other GUI elements.
 * @extends Sprite
 * @property {string} color Hex value of the element's color.
 * @property {bool} dropShadow Should this element have a shadow.
 * @property {bool} center Should this element be centered.
 * @property {bool} focused Does this element have focus.
 * @property {bool} mouseOver Is the mouse currently over this element.
 */
function GUIElement(){
}

GUIElement.prototype = new Sprite();
GUIElement.prototype.color = "#000000";
GUIElement.prototype.drawColor = "#000000";
GUIElement.prototype.dropShadow = false;
GUIElement.prototype.center = false;
GUIElement.prototype.focused = false;
GUIElement.prototype.mouseOver = false;

/**
 * Internal engine function.
 * Sets the element as focused.
 */
GUIElement.prototype.focus = function(){
	this.focused = true;
}

/**
 * Internal engine function.
 * Sets the element as blurred.
 */
GUIElement.prototype.blur = function(){
	this.focused = false;
}

/**
 * Creates a new text box.
 * 
 * @class Text boxes can be used to display text or to input text. For lots of input you should use the HTML GUI.
 * @extends GUIElement
 * @param {string} text The default text to display.
 * 
 * @property {string} text The current text.
 * @property {number} minWidth The minimum width this box can have. If the text property is empty the box will still maintain this width.
 * @property {number} fontSize The font size of the displayed text.
 * @property {string} font The name of font to use for the displayed text.
 * @property {bool} drawBG Should the background be filled.
 * @property {string} bgColor The background color of the text box in its initial state.
 * @property {string} bgFocusColor The background color of the text box when it has focus.
 * @property {string} borderColor The border color of the text box in its initial state.
 * @property {string} borderFocusColor The border color of the text box when it has focus.
 * @property {number} border Border width.
 * @property {number} padTop The amount of internal padding at the top of the text box.
 * @property {number} padLeft The amount of internal padding at the left of the text box.
 * @property {number} padRight The amount of internal padding at the right of the text box.
 * @property {number} padBottom The amount of internal padding at the bottom of the text box.
 * @property {bool} editable Can users edit the contents of the text box.
 * @property {bool} clearOnFocus Is the contents cleared when the text box is given focus.
 */
function TextBox(text){
	this.init();
	if(text != undefined){
		this.text = text;
	}
	
	this.bufferColor = this.color;
	
	this.bbox = new BRect(0, 0, 1, 1);
	
	//Create second canvas to draw to improve text performance
	this.buffer = document.createElement("canvas");
	this.bctx = this.buffer.getContext("2d");
}

TextBox.prototype = new GUIElement();
TextBox.prototype.text = "";
TextBox.prototype.textBuffer = "";
TextBox.prototype.minWidth = 75;
TextBox.prototype.fontSize = 16;
TextBox.prototype.font = "Arial";
//TextBox.prototype.color = "#000000";
TextBox.prototype.bgColor = "#ffffff";
TextBox.prototype.bgDrawColor = "#ffffff";
TextBox.prototype.bgFocusColor = "#ccffcc";
TextBox.prototype.borderColor = "#000000";
TextBox.prototype.borderDrawColor = "#000000";
TextBox.prototype.borderFocusColor = "#ff0000";
TextBox.prototype.drawBG = false;
TextBox.prototype.border = 0;
//TextBox.prototype.dropShadow = false;
//TextBox.prototype.center = false;
TextBox.prototype.padTop = 2;
TextBox.prototype.padLeft = 2;
TextBox.prototype.padRight = 2;
TextBox.prototype.padBottom = 2;
TextBox.prototype.editable = false;
TextBox.prototype.clearOnFocus = false;
TextBox.prototype.oldText = "";

/**
 * Calculates the dimensions of the textbox based on its minWidth and padding properties and its current text content.
 * 
 * @return {Vector} A vector containing the text box's dimensions. 
 */
TextBox.prototype.getDims = function(){
	this.bctx.font = this.fontSize+"px "+this.font;
	this.bctx.textBaseline = "middle";
	var textWidth = this.maxLineWidth();//this.bctx.measureText(this.text).width;
	var textHeight = this.numLines()*this.fontSize;
	//return new Vector(textWidth+this.padLeft+this.padRight, this.padTop+this.padBottom+this.fontSize, 0);
	//return new Vector(Math.max(this.minWidth, textWidth+this.padLeft+this.padRight), this.padTop+this.padBottom+this.fontSize, 0);
	return new Vector(Math.max(this.minWidth, textWidth+this.padLeft+this.padRight), this.padTop+this.padBottom+textHeight, 0);
}

TextBox.prototype.maxLineWidth = function(){
	this.bctx.font = this.fontSize+"px "+this.font;
	this.bctx.textBaseline = "middle";
	var lines = (""+this.text).split("\n");
	var maxWidth = 0;
	for(var line in lines){
		line = lines[line];
		maxWidth = Math.max(maxWidth, this.bctx.measureText(line).width);
	}
	return maxWidth;
}

TextBox.prototype.numLines = function(){
	var lines = (""+this.text).split("\n");
	return lines.length;
}

TextBox.prototype.onMouseDown = function(){
	//this.drawColor = this.downColor;
	//println("textbox down");
}

TextBox.prototype.onMouseUp = function(){
	//println("textbox up");
}

TextBox.prototype.onMouseIn = function(){
	//this.mouseOver = true;
	//this.drawColor = this.upColor;
}

TextBox.prototype.onMouseOut = function(){
	//this.mouseOver = false;
	//this.drawColor = this.color;
}

TextBox.prototype.onKeyDown = function(key){
	if(key == 8){
		this.text = this.text.substr(0, this.text.length-1);
	}
}

TextBox.prototype.onKeyPress = function(key){
	var char = String.fromCharCode(key);
	//println(char);
	if(key != 8){
		this.text += char;
	}else{
		//this.text = this.text.substr(0, this.text.length-1);
	}
}

TextBox.prototype.focus = function(){
	this.focused = true;
	if(this.clearOnFocus){
		this.minWidth = this.getDims().x;
		this.oldText = this.text;
		this.text = "";
	}
}

TextBox.prototype.blur = function(){
	this.focused = false;
	if(this.clearOnFocus && this.text == ""){
		this.text = this.oldText;
	}
}

TextBox.prototype.redraw = function(dims){
	//var dims = this.getDims();
	this.buffer.width = dims.x;
	this.buffer.height = dims.y;
	var bctx = this.bctx;//this.buffer.getContext("2d");
	
	bctx.font = this.fontSize+"px "+this.font;
	//bctx.font = "16px 'Bangers'";
	bctx.textBaseline = "middle";
	var textWidth = bctx.measureText(this.text).width;
	
	this.width = dims.x;
	this.height = dims.y;
	
	var textXOff = 0;
	var xoff = 0;
	var yoff = 0;
	if(this.center){
		textXOff = -(textWidth+this.padLeft+this.padRight)/2;
		xoff = -dims.x/2;
		yoff = -dims.y/2;
		
		this.xoffset = -dims.x/2;
		this.yoffset = -dims.y/2;
	}
	
	if(this.editable && this.focused){
		this.bgDrawColor = this.bgFocusColor;
		this.borderDrawColor = this.borderFocusColor;
	}else{
		this.bgDrawColor = this.bgColor;
		this.borderDrawColor = this.borderColor;
	}
	
	if(this.drawBG){
		bctx.fillStyle = this.bgDrawColor;
		bctx.fillRect(0, 0, dims.x, dims.y);
	}
	if(this.border > 0){
		bctx.lineWidth = this.border;
		bctx.strokeStyle = this.borderDrawColor;
		bctx.strokeRect(0, 0, dims.x, dims.y);
		bctx.lineWidth = 1;
	}
	if(this.dropShadow){
		bctx.shadowBlur = 3;
		bctx.shadowColor = "#000000";
	}
	bctx.fillStyle = this.color;
	//bctx.fillText(this.text, this.padLeft, this.padTop-this.fontSize*(0.094-(this.fontSize/(this.fontSize*this.fontSize))));
	//bctx.fillText(this.text, this.padLeft, this.padTop+this.fontSize/2);
	var lines = (""+this.text).split("\n");
	var textXOff = this.padLeft;
	var textYoff = this.padTop+this.fontSize*0.5;
	for(var i = 0; i < lines.length; i++){
		var line = lines[i];
		if(this.center){
			textXOff = (dims.x-bctx.measureText(line).width)/2;
		}
		bctx.fillText(line, textXOff, textYoff+this.fontSize*i);
	}
	bctx.shadowBlur = 0;
	
	this.image = this.buffer;
	Textures.createTexture(this.image);
}

TextBox.prototype.draw = function(context){
	var dims = this.getDims();
	
	var xoff = 0;
	var yoff = 0;
	if(this.center){
		xoff = -dims.x/2;
		yoff = -dims.y/2;
	}
	
	this.bbox.pos.x = this.x+xoff;
	this.bbox.pos.y = this.y+yoff;
	this.bbox.dims.x = dims.x;
	this.bbox.dims.y = dims.y;
	
	if(this.text != this.textBuffer || dims.x != this.bufferDimX || this.color != this.bufferColor){
		//println("redrawing text");
		this.redraw(dims);
		this.textBuffer = this.text;
		this.bufferDimX = dims.x;
		this.bufferColor = this.color;
	}
	//this.image = this.buffer;
	//context.drawImage(this.buffer, xoff, yoff);
	//context.drawSprite(this);
	Sprite.prototype.draw.call(this, context);
}

/**
 * Creates a new Button.
 * 
 * @class A blank button. Since GUIElement extends Sprite buttons can use a texture that might have text or a symbol.
 * However, clicks are checked against a bounding box and not the texture's pixels. There is also no support for
 * switching textures when the button is moused over or pressed.
 * @extends GUIElement
 * @param {function} func The function to be called when the button is pressed.
 * 
 * @property {function} func The function to be called when the button is pressed.
 * @property {BBox} bbox The bounding box used for click/mouseover detection.
 * @property {bool} drawBG Should the background be filled.
 * @property {string} color The background color of the button in its initial state.
 * @property {string} upColor The background color of the button when the mouse is hovering over it.
 * @property {string} downColor The background color of the button when it is pressed.
 */
function Button(func){
	this.init();
	this.func = func;
	this.bbox = new BRect(0, 0, 1, 1);
	this.color = "#ffffff";
	this.upColor = "#ccffcc";
	this.downColor = "#ccccff";
	this.drawColor = this.color;
	this.drawBG = true;
}

Button.prototype = new GUIElement();

Button.prototype.onMouseDown = function(){
	this.drawColor = this.downColor;
}

Button.prototype.onMouseUp = function(){
	this.drawColor = this.upColor;
	if(this.focused && this.func != undefined){
		this.func();
	}
	this.blur();
}

Button.prototype.onMouseIn = function(){
	this.mouseOver = true;
	if(!this.focused){
		this.drawColor = this.upColor;
	}
}

Button.prototype.onMouseOut = function(){
	this.mouseOver = false;
	this.drawColor = this.color;
}

Button.prototype.update = function(delta){
	/*this.bbox.x = this.x;
	this.bbox.y = this.y;
	this.bbox.width = this.width;
	this.bbox.height = this.height;*/
}

Button.prototype.draw = function(context){
	var xoff = 0;
	var yoff = 0;
	if(this.center){
		xoff = -this.width/2;
		yoff = -this.height/2;
		//this.label.x = xoff;
		//this.label.y = yoff;
		//this.label.center = true;
	}
	
	this.bbox.pos.x = this.x+xoff;
	this.bbox.pos.y = this.y+yoff;
	this.bbox.dims.x = this.width;
	this.bbox.dims.y = this.height;
	
	if(this.dropShadow){
		context.shadowBlur = 3;
		context.shadowColor = "#000000";
	}
	context.fillStyle = this.drawColor;
	if(this.drawBG && use2D && (this.image.loaded == undefined || !this.image.loaded)){
		context.fillRect(xoff, yoff, this.width, this.height);
	}
	context.shadowBlur = 0;
	Sprite.prototype.draw.call(this,ctx);
	//this.drawChildren(ctx);
}

/**
 * Creates a new TextButton.
 * 
 * @class A button with a label.
 * @extends Button
 * @param {string} label The label to be displayed on the button.
 * @param {function} func The function to be called when the button is pressed.
 * 
 * @property {TextBox} label A TextBox used as the button's label.
 * @property {string} lableColor The text color of the label in its initial state.
 * @property {string} labelUpColor The text color of the label when the mouse is hovering over it.
 * @property {string} labelDownColor The text color of the label when the button is pressed.
 */
function TextButton(label, func){
	this.init();
	this.label = new TextBox(label);
	this.label.minWidth = 0;
	this.addChild(this.label);
	this.width = this.label.getDims().x;
	this.height = this.label.getDims().y;
	this.bbox = new BRect(0, 0, this.width, this.height);
	this.func = func;
	this.drawBG = false;
	
	this.labelColor = "#000000";
	this.labelUpColor = "#000000";
	this.labelDownColor = "#000000";
	this.labelDrawColor = this.label.color;
}

TextButton.prototype = new Button();

/**
 * Sets the label colors for the different button states.
 * 
 * @param {Object} normal Neutral button color.
 * @param {Object} down Press button color.
 * @param {Object} up Hovered button color.
 */
TextButton.prototype.setLabelColors = function(normal, down, up){
	this.labelColor = normal;
	this.labelUpColor = down;
	this.labelDownColor = up;
	this.labelDrawColor = normal;
	
	this.label.color = normal;
}

TextButton.prototype.onMouseDown = function(){
	this.label.color = this.labelDownColor;
	Button.prototype.onMouseDown.call(this);
}

TextButton.prototype.onMouseUp = function(){
	this.label.color = this.labelUpColor;
	Button.prototype.onMouseUp.call(this);
}

TextButton.prototype.onMouseIn = function(){
	if(!this.focused){
		this.label.color = this.labelUpColor;
	}
	Button.prototype.onMouseIn.call(this);
}

TextButton.prototype.onMouseOut = function(){
	this.label.color = this.labelColor;
	Button.prototype.onMouseOut.call(this);
}

TextButton.prototype.draw = function(context){
	if(this.center){
		this.label.center = true;
	}
	
	this.width = this.label.getDims().x;
	this.height = this.label.getDims().y;

	Button.prototype.draw.call(this, context);
}

var gameLoop;
var oldTime;
var MSPF = 17;
var FPS = 60;
var canvas;
var aspectRatio;
var ctx;
var matrixStack = new List();
var clearColor = [1,1,1,1];
var effects = new PostFXChain();
var log = new List();
var showConsole = false;
var use2D = getCookie("use2D") ? getCookie("use2D") == "true" : false;
var brineConsole;
var useViewCulling = true;
var allowContextMenu = true;
var useStates = false;

var world = new Sprite();
world.init = function(){};

var display;

/**
 * Initializes the drawing context and input handlers with the given canvas.
 * 
 * @param {string} The DOM id of the canvas object you want to use for Brine.
 */
function initGame(canvasId){
	canvas = document.getElementById(canvasId);
	canvas.setAttribute("tabindex", "0");
	canvas.radius = Math.sqrt(canvas.width*canvas.width+canvas.height*canvas.height)/2;
	canvas.pos = [canvas.width/2, canvas.height/2, 0];
	aspectRatio = canvas.width/canvas.height;
	canvas.initialWidth = canvas.width;
	canvas.initialHeight = canvas.height;
	canvas.scaleX = canvas.offsetWidth/canvas.width;
	canvas.scaleY = canvas.offsetHeight/canvas.height;
	canvas.focus();
	
	display = document.getElementById("display");
	if(display != undefined){
		display.style.width = canvas.width;
		display.style.height = canvas.height;
		display.style.overflow = "hidden";
		display.style.position = "relative";
		display.style.backgroundColor = document.body.bgColor;
		
		display.style.webkitTouchCallout = "none";
		display.style.webkitUserSelect = "none";
		display.style.khtmlUserSelect = "none";
		display.style.MozUserSelect = "none";
		display.style.msUserSelect = "none";
		display.style.UserSelect = "none";
	}
	
	brineConsole = document.getElementById("console");
	
	//Attempts to create a 3D context falling back to 2D if 3D is unavailable
	if(canvas.getContext){
		try{
			if(!use2D){
				ctx = canvas.getContext("experimental-webgl", {alpha: true});
			}
		}catch(e){
		}
		if(!ctx){
			ctx = canvas.getContext("2d");
			use2D = true;
		}else{
			initGL(canvas);
			Textures.create();
		}
		rewriteCTXFunctions();
		
		/*if(typeof(States) != "undefined"){
			useStates = true;
		}*/
		
		world.init();
		
		//input.init();
		gInput.addFunc(192, toggleConsole, false);
		gInput.addFunc(45, togglePrintKey);
		gameLoop = requestAnimationFrame(update); //New Method
		//gameLoop = setInterval(update, 30); //Old method
	}
	canvas.addEventListener("keydown",canvasHandleKeyDown,false);
	canvas.addEventListener("keyup",canvasHandleKeyUp,false);
	canvas.addEventListener("keypress",canvasHandleKeyPress,false);
	
	document.addEventListener('mousemove',canvasMouseMove,false);
	canvas.addEventListener('mousedown',canvasMouseDown,false);
	document.addEventListener('mouseup',canvasMouseUp,false);
	
	//document.onselectstart = function(){ return false;};
	
	//Enable/disable the context menu on the canvas based on allowContextMenu
	if(!allowContextMenu){
		canvas.oncontextmenu = function(){ return false; }
	}
}

/**
 * Switches between the 2d and webgl drawing contexts. Set this as an empty link's onclick function and the link will reload the page with the context switched.
 */
function switchContext(){
	if(use2D){
		setCookie("use2D", false, 100);
		//window.location.reload();
	}else{
		setCookie("use2D", true, 100);
		//window.location.reload();
	}
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasMouseMove(e){
	if(!e) e = window.event;
	if(useStates){
		States.current().input.mouseMove(e);
	}
	gInput.mouseMove(e);
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasMouseDown(e){
	if(!e) e = window.event;
	canvas.focus();
	if(useStates){
		States.current().input.mouseDown(e);
	}
	gInput.mouseDown(e);
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasMouseUp(e){
	if(!e) e = window.event;
	if(useStates){
		States.current().input.mouseUp(e);
	}
	gInput.mouseUp(e);
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasHandleKeyDown(e){
	var key = e.keyCode;
	//println(key);
	if(useStates){
		States.current().input.handleKeyDown(e);
	}
	gInput.handleKeyDown(e);
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasHandleKeyUp(e){
	var key = e.keyCode;
	if(useStates){
		States.current().input.handleKeyUp(e);
	}
	gInput.handleKeyUp(e);
}

/**
 * Input handlers pass events to a global input object as well as the active state's input object. You probably don't need to bother with this as it's an internal functon.
 */
function canvasHandleKeyPress(e){
	var key = e.which;
	if(useStates){
		States.current().input.handleKeyPress(e);
	}
	gInput.handleKeyPress(e);
}

/**
 * Blocks the context menu on the canvas
 */
function contextMenu(e){
	println("context");
	return false;
}

/**
 * Toggles printing pressed keys
 */
function togglePrintKey(){
	if(gInput.printKey){
		gInput.printKey = false;
	}else{
		gInput.printKey = true;
	}
}

/**
  * Game loop update function. Called in draw where time is the current execution time. Update then calculates a delta
  * time for how much time has passed since the last update and passes that on to the state manager update (if using States)
  * as well as the world object's update.
  */
function update(time){
	canvas.scaleX = canvas.offsetWidth/canvas.width;
	canvas.scaleY = canvas.offsetHeight/canvas.height;
	
	if(!oldTime){ oldTime = time; }
	var delta = (time-oldTime)/MSPF;
	oldTime = time;
	delta = Math.min(1,delta);
	//println(delta);
	if(useStates){
		States.update(delta);
	}
	
	world.update(delta);
	
	draw();
	
	gameLoop = requestAnimationFrame(update);
}

/**
 * Clears the canvas and calls draw on the state manager/world.
 * Currently also does console display stuff, but that should be relocated.
 */
function draw(){
	if(!use2D){
		ctx.setBuffer(null);
		ctx.viewport(0, 0, ctx.viewportWidth, ctx.viewportHeight);
		var alpha = clearColor[3];
		ctx.clearColor(clearColor[0]*alpha, clearColor[1]*alpha, clearColor[2]*alpha, alpha);
		ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
		
		ctx.setBuffer(colorBuffer);
		ctx.viewport(0, 0, ctx.viewportWidth, ctx.viewportHeight);
		//ctx.clearColor(clearColor[0]*alpha, clearColor[1]*alpha, clearColor[2]*alpha, alpha);
		ctx.clearColor(0,0,0,0);
		ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
	}else{
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle = rgb(clearColor);
		ctx.globalAlpha = clearColor[3];
		ctx.fillRect(0,0,canvas.width,canvas.height);
	}
	
	mat4.ortho(-0, 1*aspectRatio, -1, 0, -1, 1, pMatrix);
	mat4.identity(mvMatrix);
	
	if(useStates){
		States.draw(ctx);
	}
	
	//Draw the stateless world
	world.transform(ctx);
	world.draw(ctx);
	world.unTransform(ctx);
	
	if(!use2D){
		ctx.clearColor(0, 0, 0, 0);
		effects.apply(ctx, colorBuffer);
		
		ctx.useProgram(shaderProgram);
		
		ctx.bindTexTo(colorBuffer.texture, shaderProgram.samplerUniform);
		
		ctx.uniform1f(shaderProgram.alpha, 1.0);
		
		ctx.setBuffer(null);
		
		ctx.drawScreenBuffer(shaderProgram);
	}
	
	if(showConsole){
		if(!use2D){
			brineConsole = document.getElementById("console");
			if(brineConsole != null && brineConsole != undefined){
				var text = "";
				for(var node = log.head; node !== null; node = node.link){
					text = node.item+"<br/>"+text;
				}
				brineConsole.innerHTML = text;
			}
			brineConsole.style.visibility = "visible";
		}else{
			ctx.fillStyle = "#ffffff";
			ctx.globalAlpha = 0.25;
			ctx.fillRect(0,0,canvas.width,canvas.height);
			ctx.globalAlpha = 1.0;
			ctx.fillStyle = "#000000";
			//ctx.shadowBlur = 3;
			ctx.shadowColor = "#ffffff";
			var lineHeight = 18;
			var lineNumber = 0;
			for(var node = log.head; node !== null; node = node.link){
				var line = node.item;
				//ctx.font="16px Arial";
				//ctx.strokeText(line, 5, canvas.height-(log.length-lineNumber)*12);
				ctx.font = lineHeight+"px Arial";
				ctx.fillText(line, 5, canvas.height-(log.length-lineNumber)*lineHeight);
				lineNumber++;
			}
			ctx.shadowBlur = 0;
		}
	}else{
		if(brineConsole != null && brineConsole != undefined && !use2D){
			brineConsole.innerHTML = "";
			brineConsole.style.visibility = "hidden";
		}
	}
}

var brinePixelData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZDRjI0RUYxRDdDNTExRTFBRkJCQzk5NTUyMDgzMDVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZDRjI0RUYyRDdDNTExRTFBRkJCQzk5NTUyMDgzMDVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkNGMjRFRUZEN0M1MTFFMUFGQkJDOTk1NTIwODMwNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkNGMjRFRjBEN0M1MTFFMUFGQkJDOTk1NTIwODMwNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7FSUX/AAAAD0lEQVR42mL4//8/QIABAAX+Av4tzonuAAAAAElFTkSuQmCC";
Textures.load(brinePixelData);

/**
 * Rewrites the default canvas context functions so that they work the same for 2D and 3D contexts
 */
function rewriteCTXFunctions(){
	//Add a fullscreen function to the canvas
	var prefixes = ["moz","webkit","o","ms"];
	canvas.matchScreenRes = false;
	
	canvas.enterFullScreen = function(resize){
		if(exists(this.requestFullScreen)){
			this.requestFullScreen();
		}else{
			for(var prefix in prefixes){
				prefix = prefixes[prefix];
				if(exists(this[prefix+"RequestFullScreen"])){
					this[prefix+"RequestFullScreen"]();
				}
			}
		}
		
		this.matchScreenRes = resize;
	}
	
	canvas.exitFullScreen = function(){
		if(exists(this.cancelFullScreen)){
			this.cancelFullScreen();
		}else{
			for(var prefix in prefixes){
				prefix = prefixes[prefix];
				if(exists(canvas[prefix+"CancelFullScreen"])){
					canvas[prefix+"CancelFullScreen"]();
				}
			}
		}
	}
	
	canvas.onFullScreenChange = function(e){
		if(document.webkitIsFullScreen || document.mozFullScreen){
			console.log("enter full")
			if(canvas.matchScreenRes){
				canvas.width = screen.width;
				canvas.height = screen.height;
			}
			canvas.style.width = screen.width+"px";
			canvas.style.height = screen.height+"px";
		}else{
			console.log("exit full")
			if(exists(canvas.initialWidth)){
				canvas.width = canvas.initialWidth;
			}
			
			if(exists(canvas.initialHeight)){
				canvas.height = canvas.initialHeight;
			}
			
			canvas.style.width = "";
			canvas.style.height = "";
		}
		aspectRatio = canvas.width/canvas.height;
		ctx.viewportWidth = canvas.width;
		ctx.viewportHeight = canvas.height;
	}
	
	document.addEventListener("fullscreenchange", canvas.onFullScreenChange, false);
	document.addEventListener("mozfullscreenchange", canvas.onFullScreenChange, false);
	document.addEventListener("webkitfullscreenchange", canvas.onFullScreenChange, false);
	
	//var ctxProto = ctx.__proto__;
	var ctxProto = ctx.constructor.prototype;
	
	var identityMat = mat4.create();
	mat4.identity(identityMat);
	ctx.save = function(){
		var tempMat = mat4.create();
		mat4.multiply(mvMatrix, identityMat, tempMat);
		ctx.matrix = tempMat;
		matrixStack.push_back(tempMat);
		if(use2D){
			ctxProto.save.call(ctx);
		}
	}
	
	ctx.restore = function(){
		mvMatrix = matrixStack.pop_back();
		if(use2D){
			ctxProto.restore.call(ctx);
		}
	}
	
	ctx.curDrawPos = new Vector(0,0,0);
	
	ctx.moveTo = function(x, y){
		if(!use2D){
			ctx.curDrawPos.x = x;
			ctx.curDrawPos.y = y;
		}else{
			return ctxProto.moveTo.call(this, x, y);
		}		
	}
	
	var lineSprite = new Sprite();
	//lineSprite.image = Textures.load("../engine/images/pixel.png");
	lineSprite.image = Textures.load(brinePixelData);
	ctx.lineSprite = lineSprite;
	ctx.glLineWidth = 1;
	ctx.lineTo = function(x, y){
		if(!use2D){
			var xDis = x-this.curDrawPos.x;
			var yDis = y-this.curDrawPos.y;
			var length = Math.sqrt(xDis*xDis+yDis*yDis);
			var ang = Math.atan2(yDis, xDis);
			this.lineSprite.x = this.curDrawPos.x;
			this.lineSprite.y = this.curDrawPos.y;
			this.lineSprite.rotation = ang;
			this.lineSprite.width = length;
			this.lineSprite.height = this.glLineWidth;
			this.lineSprite.yoffset = -this.lineSprite.height/2;
			this.lineSprite.transform(this);
			this.lineSprite.draw(this);
			this.lineSprite.unTransform(this);
			this.curDrawPos.x = x;
			this.curDrawPos.y = y;
		}else{
			return ctxProto.lineTo.call(this, x, y);
		}
	}
	
	ctx.getMatrix = function(){
		return this.matrix;
	}
	
	ctx.scale = function(x, y){
		x = x == 0 ? 0.0000001 : x;
		y = y == 0 ? 0.0000001 : y;
		
		mat4.scale(mvMatrix, [x, y, 1.0]);
		if(use2D){
			return ctxProto.scale.call(this, x, y);
		}
	}
	
	ctx.rotate = function(angle){
		mat4.rotateZ(mvMatrix, -angle);
		if(use2D){
			return ctxProto.rotate.call(this, angle);
		}
	}
	
	ctx.translate = function(x, y){
		mat4.translate(mvMatrix, [x*aspectRatio/canvas.width, -y/canvas.height, 0.0]);
		if(use2D){
			return ctxProto.translate.call(this, x, y);
		}
	}
	
	//These 2 still need to be fixed
	ctx.transform = function(a, b, c, d, e, f){
		if(use2D){
			return ctxProto.transform.call(this, a, b, c, d, e, f);
		}
	}
	
	ctx.setTransform = function(a, b, c, d, e, f){
		if(use2D){
			return ctxProto.setTransform.call(this, a, b, c, d, e, f);
		}
	}
	
	if(use2D){
		//Buffer for drawing scrolling sprite to
		ctx.spriteBuffer = document.createElement("canvas");
		ctx.spriteBCTX = ctx.spriteBuffer.getContext("2d");
		//document.body.appendChild(ctx.spriteBuffer);
	}else{
		ctx.setBuffer = function(buffer){
			this.bindFramebuffer(this.FRAMEBUFFER, buffer);
		}
		
		//Simplifies binding textures
		ctx.bindTexTo = function(texture, uniform, num){
			num = num ? num : 0;
			this.activeTexture(this.TEXTURE0+num);
			this.bindTexture(this.TEXTURE_2D, texture);
			this.uniform1i(uniform, num);
		}
		
		ctx.drawScreenBuffer = function(shader, clearBuffer){
			mat4.identity(mvMatrix);
			mat4.scale(mvMatrix, [aspectRatio, 1, 1.0]);
			
			this.viewport(0, 0, this.viewportWidth, this.viewportHeight);
			if(clearBuffer){
				this.clear(this.COLOR_BUFFER_BIT);
			}
			
			this.blendFunc(this.ONE, this.ONE_MINUS_SRC_ALPHA); //This might need to be taken out if there is some buffer drawing issue down the line.
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVPB);
			this.vertexAttribPointer(shader.vertexPositionAttribute, spriteVPB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVTB);
			this.vertexAttribPointer(shader.textureCoordAttribute, spriteVTB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, spriteVIB);
			setMatrixUniforms(shader);
			this.drawElements(this.TRIANGLES, spriteVIB.numItems, this.UNSIGNED_SHORT, 0);
			
			mat4.identity(mvMatrix);
		}
	}

	ctx.alpha = 1.0;
	var sPos = [0,0,0];
	var verts = new Array();
	verts.push([0,0,0]);
	verts.push([0,0,0]);
	verts.push([0,0,0]);
	verts.push([0,0,0]);
	ctx.drawSprite = function(sprite, frame){
		var width = sprite.width;
		var height = sprite.height;
		var sWidth = width*sprite.scaleX;
		var sHeight = height*sprite.scaleY;
		
		/*var sRadius = Math.sqrt(sWidth*sWidth+sHeight*sHeight)/2;
		//var minDis = canvas.radius+sRadius;
		var minX = canvas.width/2+sRadius;
		var minY = canvas.height/2+sRadius;
		sPos[0] = 0;
		sPos[1] = 0;
		mat4.multiplyVec3(mvMatrix, sPos);
		vec3.multiply(sPos, [(1/aspectRatio)*canvas.width, -canvas.height, 1]);
		//var dis = vec3.dist(sPos, canvas.pos);
		var xDis = Math.abs(sPos[0]-canvas.pos[0]);
		var yDis = Math.abs(sPos[1]-canvas.pos[1]);
		//println("min: "+minDis+" dis: "+dis);*/
		
		//if(dis <= minDis){
		if(true){//}!useViewCulling || (xDis <= minX && yDis <= minY)){
			var x = sprite.xoffset;
			var y = sprite.yoffset;
			
			var image = sprite.image;
			frame = frame ? Math.floor(frame) : 0;
			var frameWidth = sprite.frameWidth > 0 ? sprite.frameWidth : image.width;
			var frameHeight = sprite.frameHeight > 0 ? sprite.frameHeight : image.height;
			var multColor = sprite.multColor;
			//var alpha = sprite.alpha;
			var alpha = Math.max(0, ctx.alpha);
			var blendMode = sprite.blendMode;
			
			ctx.globalAlpha = alpha;
			ctx.globalCompositeOperation = blendMode;
			
			var renderShader = spriteShader;
			
			//If we are using webgl this sets a few uniforms and binds the sprite's texture
			if(sprite.image.texture != undefined){
				y = -y;
				
				//ctx.blendFunc(ctx[sprite.blendFunction.a], ctx[sprite.blendFunction.b]);
				ctx.blendFuncSeparate(ctx[sprite.blendFunction.a], ctx[sprite.blendFunction.b], ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA);
			
				mat4.translate(mvMatrix, [x*aspectRatio/canvas.width, y/canvas.height, 0.0]);
				
				//If the width or height is 0 the changes to the matrix can't be reversed
				width = Math.max(0.0000001, width);
				height = Math.max(0.0000001, height);
				mat4.scale(mvMatrix, [width*aspectRatio/canvas.width, height/canvas.height, 1.0]);
				
				//renderShader = spriteShader;
				
				if(sprite.shader != null && sprite.shader != undefined){
					//renderShader = sprite.shader;
				}
				
				ctx.useProgram(renderShader);
				
				ctx.bindBuffer(ctx.ARRAY_BUFFER, spriteVPB);
				ctx.vertexAttribPointer(renderShader.vertexPositionAttribute, spriteVPB.itemSize, ctx.FLOAT, false, 0, 0);
				
				ctx.bindBuffer(ctx.ARRAY_BUFFER, spriteVTB);
				ctx.vertexAttribPointer(renderShader.textureCoordAttribute, spriteVTB.itemSize, ctx.FLOAT, false, 0, 0);
				
				ctx.activeTexture(ctx.TEXTURE0);
				ctx.bindTexture(ctx.TEXTURE_2D, sprite.image.texture);
				ctx.uniform1i(renderShader.samplerUniform, 0);
				
				ctx.uniform3f(renderShader.multColor, multColor.r, multColor.g, multColor.b);
				ctx.uniform1f(renderShader.alpha, alpha);
			}
			
			var tilesX = sprite.tilesX;
			var tilesY = sprite.tilesY;
			var tileImage = (tilesX != undefined && tilesY != undefined);
			
			var sliceX = Math.min(Math.max(0, sprite.sliceX), frameWidth);
			var sliceY = Math.min(Math.max(0, sprite.sliceY), frameHeight);
			var sliceWidth = sprite.sliceWidth ? Math.max(0, sprite.sliceWidth) : sprite.sliceWidth;
			var sliceHeight = sprite.sliceHeight ? Math.max(0, sprite.sliceHeight) : sprite.sliceHeight;
			
			var scrollX = sprite.scrollX%(width/tilesX);
			var scrollY = sprite.scrollY%(height/tilesY);
			var scrollImage = (scrollX != undefined && scrollY != undefined && (scrollX != 0 || scrollY != 0));
			
			//New consolidated drawing code
			var frameXOff = (frame%(image.width/frameWidth))*frameWidth;
			var frameYOff = Math.floor(frame/(image.width/frameWidth))*frameHeight;
			
			frameWidth = frameWidth-sliceX;
			frameHeight = frameHeight-sliceY;
			
			frameWidth = sliceWidth ? Math.min(frameWidth, sliceWidth) : frameWidth;
			frameHeight = sliceHeight ? Math.min(frameHeight, sliceHeight) : frameHeight;
			
			//Add Slice offsets
			frameXOff += sliceX;
			frameYOff += sliceY;
			
			//2D drawing
			if(use2D){
				var tilesXcale = 1/tilesX;
				var tilesYcale = 1/tilesY;
				if(scrollImage){
					scrollX /= tilesXcale;
					scrollY /= tilesYcale;
					scrollX = scrollX%width;
					scrollY = scrollY%height;
					
					//scrollX = -scrollX;
					scrollY = -scrollY;
					if(scrollX < 0){
						scrollX = width+scrollX;
					}
					if(scrollY < 0){
						scrollY = height+scrollY;
					}
					
					adscrollX = (scrollX/width)*frameWidth;
					adscrollY = (scrollY/height)*frameHeight;
					var q0Width = frameWidth-adscrollX;
					var q0Height = frameHeight-adscrollY;
					
					var q1Width = frameWidth-q0Width;
					var q1Height = q0Height;
					
					var q2Width = q1Width;
					var q2Height = frameHeight-q0Height;
					
					var q3Width = q0Width;
					var q3Height = q2Height;
					
					this.spriteBuffer.width = width;
					this.spriteBuffer.height = height;
					
					//Draw to this buffer so we can tile the sprite lots without having to draw it four times for each tile to get the scrolling effect
					
					if(q0Width > 0 && q0Height > 0){
						this.spriteBCTX.drawImage(image, frameXOff+adscrollX, frameYOff+adscrollY, q0Width, q0Height, 0, 0, (q0Width/frameWidth)*width, (q0Height/frameHeight)*height);
					}
					if(q1Width > 0 && q1Height > 0){
						this.spriteBCTX.drawImage(image, frameXOff, frameYOff+adscrollY, q1Width, q1Height, (0+(width-scrollX)), 0, (q1Width/frameWidth)*width, (q1Height/frameHeight)*height);
					}
					if(q2Width > 0 && q2Height > 0){
						this.spriteBCTX.drawImage(image, frameXOff, frameYOff, q2Width, q2Height, (0+(width-scrollX)), (0+(height-scrollY)), (q2Width/frameWidth)*width, (q2Height/frameHeight)*height);
					}
					if(q3Width > 0 && q3Height > 0){
						this.spriteBCTX.drawImage(image, frameXOff+adscrollX, frameYOff, q3Width, q3Height, 0, (0+(height-scrollY)), (q3Width/frameWidth)*width, (q3Height/frameHeight)*height);
					}
					
					//Set the current image (not the sprite's) to the buffer we just drew to
					image = this.spriteBuffer;
				
					//Reset everything to fit the buffer's dimensions
					frameXOff = 0;
					frameYOff = 0;
					frameWidth = width;
					frameHeight = height;
				}
				
				var xOff = 0;
				var yOff = 0;
				
				//Tile image (or don't)
				for(var i = 0; i < tilesX; i++){
					for(var j = 0; j < tilesY; j++){
						this.drawImage(image, frameXOff, frameYOff, frameWidth, frameHeight, x+xOff, y+yOff, width*tilesXcale, height*tilesYcale);
						yOff += height*tilesYcale;
					}
					yOff = 0;
					xOff += width*tilesXcale;
				}
			}else{
				ctx.useProgram(renderShader);
				ctx.uniform2f(renderShader.frameOffset, frameXOff/image.width, frameYOff/image.height);
				ctx.uniform2f(renderShader.frameDims, frameWidth/image.width, frameHeight/image.height);
			}
			
			if(!use2D){
				if(tileImage){
					ctx.uniform2f(renderShader.tiles, sprite.tilesX, sprite.tilesY);
				}
				if(scrollImage){
					ctx.uniform2f(renderShader.scroll, scrollX/width, scrollY/height);
				}
			}
			
			//WebGL drawing
			if(sprite.image.texture != undefined){
				ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, spriteVIB);
				setMatrixUniforms(renderShader);
				ctx.drawElements(ctx.TRIANGLES, spriteVIB.numItems, ctx.UNSIGNED_SHORT, 0);
				
				mat4.scale(mvMatrix, [1/(width*aspectRatio/canvas.width), 1/(height/canvas.height), 1.0]);
				mat4.translate(mvMatrix, [-x*aspectRatio/canvas.width, -y/canvas.height, 0.0]);
				
				ctx.uniform2f(renderShader.frameOffset, 0, 0);
				ctx.uniform2f(renderShader.frameDims, 1, 1);
				ctx.uniform2f(renderShader.tiles, 1, 1);
				ctx.uniform2f(renderShader.scroll, 0, 0);
				
				ctx.uniform3f(renderShader.multColor, 1, 1, 1);
			}
			
			ctx.globalAlpha = 1.0;
			ctx.globalCompositeOperation = "source-over";
		}else{
			//println("Sprite failed broad sweep.");
		}
	}
}

/**
 * Toggles the visibility of the console.
 */
function toggleConsole(){
	if(showConsole){
		showConsole = false;
	}else{
		showConsole = true;
	}
}

/**
 * Prints the string value of the given object to the console without a new line.
 * 
 * @param {Object} value Object whose toString will be printed.
 */
function print(value){
	log.push(value);
	if(log.length > 25){
		log.remove(log.head.item);
	}
}

/**
 * Prints the string value of the given object to the console with a new line.
 * 
 * @param {Object} value Object whose toString will be printed.
 */
function println(value){
	print(value+"\n");
}

/**
 * Degrees to radians conversion.
 * 
 * @param {number} degrees Value in degrees to be comverted to radians.
 * @return {number} The radian value.
 */
function DTR(degrees){
	return degrees*Math.PI/180;
}

/**
 * Radians to degrees conversion.
 * 
 * @param {number} radians Value in radians to be comverted to degrees.
 * @return {number} The degree value.
 */
function RTD(radians){
	return radians*180/Math.PI;
}

//Convert RGB to hex string
/**
 * Convert RGB to hex string
 * 
 * @param {array} color The RGB color to be converted to a HEX string.
 * @return {string} The HEX value as a string.
 */
function rgb(color){
	return "#"+rgbComp(color[0])+rgbComp(color[1])+rgbComp(color[2]);
}

function rgbComp(value){
	var hex = (Math.round(value*255)).toString(16);
	return ((hex.length < 2) ? "0" : "")+hex;
}

/**
 * Checks to see that variable is not undefined and not null
 * 
 * @param {variable} variable The variable to check.
 * @return {bool} True if not undefined and not null.
 */
function exists(variable){
	return typeof variable != "undefined" && variable != null;
}

/**
 * Creates or sets the value of a browser cookie.
 * 
 * @param {string} name The name of the cookie. Can be generic since browsers store cookies based on the page that created them.
 * @param {Object} value String or number value to store in this cookie.
 * @param {number} days How many days this cookie will last before being removed.
 */
function setCookie(name, value, days){
	var date = new Date();
	date.setDate(date.getDate() + days);
	var data = escape(value)+((days==null) ? "" : "; expires="+date.toUTCString());
	document.cookie = name+"="+data;
}

/**
 * Reads the value of a cookie.
 * @param {string} name Name of the cookie to be read.
 * @return {string} The contents of the cookie.
 */
function getCookie(name){
	var strings = document.cookie.split("; ");
	//println(strings.length);
	for(var i=0; i < strings.length; i++){
		var cookie = strings[i].split("=");
		//println(cookie[0]+": "+(cookie[0] == name));
		if(cookie[0] == name){
			return unescape(cookie[1]);
		}
	}
	return false;
}

/**
 * Dynamically create a new canvas object for use as a game context.
 * 
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {string} color Background color of the canvas.
 */
function createGameCanvas(width, height, color){
	var newCanvas = document.createElement("canvas");
	newCanvas.width = width;
	newCanvas.height = height;
	//newCanvas.style.backgroundColor = color;
	newCanvas.innerHTML = "<span style=\"font: white;\">Your browser doesn't support HTML 5 Canvas.<br />You should probably switch to something a little more forward thinking.</span>";
	return newCanvas;
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik MÃƒÂ¶ller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());