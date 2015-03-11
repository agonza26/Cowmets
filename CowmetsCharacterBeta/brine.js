/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.0
 */
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
(function(e){"use strict";var t={};typeof exports=="undefined"?typeof define=="function"&&typeof define.amd=="object"&&define.amd?(t.exports={},define(function(){return t.exports})):t.exports=typeof window!="undefined"?window:e:t.exports=exports,function(e){if(!t)var t=1e-6;if(!n)var n=typeof Float32Array!="undefined"?Float32Array:Array;if(!r)var r=Math.random;var i={};i.setMatrixArrayType=function(e){n=e},typeof e!="undefined"&&(e.glMatrix=i);var s={};s.create=function(){var e=new n(2);return e[0]=0,e[1]=0,e},s.clone=function(e){var t=new n(2);return t[0]=e[0],t[1]=e[1],t},s.fromValues=function(e,t){var r=new n(2);return r[0]=e,r[1]=t,r},s.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},s.set=function(e,t,n){return e[0]=t,e[1]=n,e},s.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},s.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},s.sub=s.subtract,s.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e},s.mul=s.multiply,s.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e},s.div=s.divide,s.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e},s.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e},s.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},s.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e},s.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},s.dist=s.distance,s.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r},s.sqrDist=s.squaredDistance,s.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},s.len=s.length,s.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n},s.sqrLen=s.squaredLength,s.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},s.normalize=function(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e},s.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},s.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e},s.lerp=function(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e},s.random=function(e,t){t=t||1;var n=r()*2*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},s.transformMat2=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e},s.transformMat2d=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e},s.transformMat3=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e},s.transformMat4=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e},s.forEach=function(){var e=s.create();return function(t,n,r,i,s,o){var u,a;n||(n=2),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],s(e,e,o),t[u]=e[0],t[u+1]=e[1];return t}}(),s.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},typeof e!="undefined"&&(e.vec2=s);var o={};o.create=function(){var e=new n(3);return e[0]=0,e[1]=0,e[2]=0,e},o.clone=function(e){var t=new n(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},o.fromValues=function(e,t,r){var i=new n(3);return i[0]=e,i[1]=t,i[2]=r,i},o.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},o.set=function(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e},o.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e},o.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e},o.sub=o.subtract,o.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e},o.mul=o.multiply,o.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e},o.div=o.divide,o.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},o.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},o.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e},o.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e},o.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)},o.dist=o.distance,o.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i},o.sqrDist=o.squaredDistance,o.length=function(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)},o.len=o.length,o.squaredLength=function(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r},o.sqrLen=o.squaredLength,o.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},o.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e},o.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},o.cross=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2];return e[0]=i*a-s*u,e[1]=s*o-r*a,e[2]=r*u-i*o,e},o.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e},o.random=function(e,t){t=t||1;var n=r()*2*Math.PI,i=r()*2-1,s=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(n)*s,e[1]=Math.sin(n)*s,e[2]=i*t,e},o.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12],e[1]=n[1]*r+n[5]*i+n[9]*s+n[13],e[2]=n[2]*r+n[6]*i+n[10]*s+n[14],e},o.transformMat3=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e},o.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},o.forEach=function(){var e=o.create();return function(t,n,r,i,s,o){var u,a;n||(n=3),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2];return t}}(),o.str=function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},typeof e!="undefined"&&(e.vec3=o);var u={};u.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e},u.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},u.fromValues=function(e,t,r,i){var s=new n(4);return s[0]=e,s[1]=t,s[2]=r,s[3]=i,s},u.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},u.set=function(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e},u.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e},u.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e},u.sub=u.subtract,u.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e},u.mul=u.multiply,u.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e},u.div=u.divide,u.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},u.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},u.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e},u.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},u.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(n*n+r*r+i*i+s*s)},u.dist=u.distance,u.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return n*n+r*r+i*i+s*s},u.sqrDist=u.squaredDistance,u.length=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)},u.len=u.length,u.squaredLength=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i},u.sqrLen=u.squaredLength,u.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},u.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e},u.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},u.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e[3]=u+r*(n[3]-u),e},u.random=function(e,t){return t=t||1,e[0]=r(),e[1]=r(),e[2]=r(),e[3]=r(),u.normalize(e,e),u.scale(e,e,t),e},u.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*s+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*s+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*s+n[15]*o,e},u.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},u.forEach=function(){var e=u.create();return function(t,n,r,i,s,o){var u,a;n||(n=4),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}}(),u.str=function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.vec4=u);var a={};a.create=function(){var e=new n(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},a.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},a.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},a.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},a.transpose=function(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},a.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*s-i*r;return o?(o=1/o,e[0]=s*o,e[1]=-r*o,e[2]=-i*o,e[3]=n*o,e):null},a.adjoint=function(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e},a.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},a.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*u+i*f,e[1]=r*a+i*l,e[2]=s*u+o*f,e[3]=s*a+o*l,e},a.mul=a.multiply,a.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*u,e[1]=r*-u+i*a,e[2]=s*a+o*u,e[3]=s*-u+o*a,e},a.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1];return e[0]=r*u,e[1]=i*a,e[2]=s*u,e[3]=o*a,e},a.str=function(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.mat2=a);var f={};f.create=function(){var e=new n(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},f.clone=function(e){var t=new n(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},f.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},f.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},f.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=n*s-r*i;return a?(a=1/a,e[0]=s*a,e[1]=-r*a,e[2]=-i*a,e[3]=n*a,e[4]=(i*u-s*o)*a,e[5]=(r*o-n*u)*a,e):null},f.determinant=function(e){return e[0]*e[3]-e[1]*e[2]},f.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1],c=n[2],h=n[3],p=n[4],d=n[5];return e[0]=r*f+i*c,e[1]=r*l+i*h,e[2]=s*f+o*c,e[3]=s*l+o*h,e[4]=f*u+c*a+p,e[5]=l*u+h*a+d,e},f.mul=f.multiply,f.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=Math.sin(n),l=Math.cos(n);return e[0]=r*l+i*f,e[1]=-r*f+i*l,e[2]=s*l+o*f,e[3]=-s*f+l*o,e[4]=l*u+f*a,e[5]=l*a-f*u,e},f.scale=function(e,t,n){var r=n[0],i=n[1];return e[0]=t[0]*r,e[1]=t[1]*i,e[2]=t[2]*r,e[3]=t[3]*i,e[4]=t[4]*r,e[5]=t[5]*i,e},f.translate=function(e,t,n){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4]+n[0],e[5]=t[5]+n[1],e},f.str=function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},typeof e!="undefined"&&(e.mat2d=f);var l={};l.create=function(){var e=new n(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},l.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},l.clone=function(e){var t=new n(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},l.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},l.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},l.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},l.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=l*o-u*f,h=-l*s+u*a,p=f*s-o*a,d=n*c+r*h+i*p;return d?(d=1/d,e[0]=c*d,e[1]=(-l*r+i*f)*d,e[2]=(u*r-i*o)*d,e[3]=h*d,e[4]=(l*n-i*a)*d,e[5]=(-u*n+i*s)*d,e[6]=p*d,e[7]=(-f*n+r*a)*d,e[8]=(o*n-r*s)*d,e):null},l.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8];return e[0]=o*l-u*f,e[1]=i*f-r*l,e[2]=r*u-i*o,e[3]=u*a-s*l,e[4]=n*l-i*a,e[5]=i*s-n*u,e[6]=s*f-o*a,e[7]=r*a-n*f,e[8]=n*o-r*s,e},l.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8];return t*(f*s-o*a)+n*(-f*i+o*u)+r*(a*i-s*u)},l.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8];return e[0]=h*r+p*o+d*f,e[1]=h*i+p*u+d*l,e[2]=h*s+p*a+d*c,e[3]=v*r+m*o+g*f,e[4]=v*i+m*u+g*l,e[5]=v*s+m*a+g*c,e[6]=y*r+b*o+w*f,e[7]=y*i+b*u+w*l,e[8]=y*s+b*a+w*c,e},l.mul=l.multiply,l.translate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=u,e[5]=a,e[6]=h*r+p*o+f,e[7]=h*i+p*u+l,e[8]=h*s+p*a+c,e},l.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=Math.sin(n),p=Math.cos(n);return e[0]=p*r+h*o,e[1]=p*i+h*u,e[2]=p*s+h*a,e[3]=p*o-h*r,e[4]=p*u-h*i,e[5]=p*a-h*s,e[6]=f,e[7]=l,e[8]=c,e},l.scale=function(e,t,n){var r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},l.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},l.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=n*u,c=n*a,h=r*u,p=r*a,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-(h+d),e[3]=l+g,e[6]=c-m,e[1]=l-g,e[4]=1-(f+d),e[7]=p+v,e[2]=c+m,e[5]=p-v,e[8]=1-(f+h),e},l.normalFromMat4=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(a*C-o*A-f*N)*O,e[2]=(o*L-u*C+f*T)*O,e[3]=(i*L-r*A-s*k)*O,e[4]=(n*A-i*C+s*N)*O,e[5]=(r*C-n*L-s*T)*O,e[6]=(v*x-m*S+g*E)*O,e[7]=(m*w-d*x-g*b)*O,e[8]=(d*S-v*w+g*y)*O,e):null},l.str=function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},typeof e!="undefined"&&(e.mat3=l);var c={};c.create=function(){var e=new n(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},c.clone=function(e){var t=new n(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},c.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},c.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},c.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],s=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e},c.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(i*L-r*A-s*k)*O,e[2]=(v*x-m*S+g*E)*O,e[3]=(h*S-c*x-p*E)*O,e[4]=(a*C-o*A-f*N)*O,e[5]=(n*A-i*C+s*N)*O,e[6]=(m*w-d*x-g*b)*O,e[7]=(l*x-h*w+p*b)*O,e[8]=(o*L-u*C+f*T)*O,e[9]=(r*C-n*L-s*T)*O,e[10]=(d*S-v*w+g*y)*O,e[11]=(c*w-l*S-p*y)*O,e[12]=(u*N-o*k-a*T)*O,e[13]=(n*k-r*N+i*T)*O,e[14]=(v*b-d*E-m*y)*O,e[15]=(l*E-c*b+h*y)*O,e):null},c.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15];return e[0]=u*(h*g-p*m)-c*(a*g-f*m)+v*(a*p-f*h),e[1]=-(r*(h*g-p*m)-c*(i*g-s*m)+v*(i*p-s*h)),e[2]=r*(a*g-f*m)-u*(i*g-s*m)+v*(i*f-s*a),e[3]=-(r*(a*p-f*h)-u*(i*p-s*h)+c*(i*f-s*a)),e[4]=-(o*(h*g-p*m)-l*(a*g-f*m)+d*(a*p-f*h)),e[5]=n*(h*g-p*m)-l*(i*g-s*m)+d*(i*p-s*h),e[6]=-(n*(a*g-f*m)-o*(i*g-s*m)+d*(i*f-s*a)),e[7]=n*(a*p-f*h)-o*(i*p-s*h)+l*(i*f-s*a),e[8]=o*(c*g-p*v)-l*(u*g-f*v)+d*(u*p-f*c),e[9]=-(n*(c*g-p*v)-l*(r*g-s*v)+d*(r*p-s*c)),e[10]=n*(u*g-f*v)-o*(r*g-s*v)+d*(r*f-s*u),e[11]=-(n*(u*p-f*c)-o*(r*p-s*c)+l*(r*f-s*u)),e[12]=-(o*(c*m-h*v)-l*(u*m-a*v)+d*(u*h-a*c)),e[13]=n*(c*m-h*v)-l*(r*m-i*v)+d*(r*h-i*c),e[14]=-(n*(u*m-a*v)-o*(r*m-i*v)+d*(r*a-i*u)),e[15]=n*(u*h-a*c)-o*(r*h-i*c)+l*(r*a-i*u),e},c.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8],l=e[9],c=e[10],h=e[11],p=e[12],d=e[13],v=e[14],m=e[15],g=t*o-n*s,y=t*u-r*s,b=t*a-i*s,w=n*u-r*o,E=n*a-i*o,S=r*a-i*u,x=f*d-l*p,T=f*v-c*p,N=f*m-h*p,C=l*v-c*d,k=l*m-h*d,L=c*m-h*v;return g*L-y*k+b*C+w*N-E*T+S*x},c.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=t[9],p=t[10],d=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=n[0],w=n[1],E=n[2],S=n[3];return e[0]=b*r+w*u+E*c+S*v,e[1]=b*i+w*a+E*h+S*m,e[2]=b*s+w*f+E*p+S*g,e[3]=b*o+w*l+E*d+S*y,b=n[4],w=n[5],E=n[6],S=n[7],e[4]=b*r+w*u+E*c+S*v,e[5]=b*i+w*a+E*h+S*m,e[6]=b*s+w*f+E*p+S*g,e[7]=b*o+w*l+E*d+S*y,b=n[8],w=n[9],E=n[10],S=n[11],e[8]=b*r+w*u+E*c+S*v,e[9]=b*i+w*a+E*h+S*m,e[10]=b*s+w*f+E*p+S*g,e[11]=b*o+w*l+E*d+S*y,b=n[12],w=n[13],E=n[14],S=n[15],e[12]=b*r+w*u+E*c+S*v,e[13]=b*i+w*a+E*h+S*m,e[14]=b*s+w*f+E*p+S*g,e[15]=b*o+w*l+E*d+S*y,e},c.mul=c.multiply,c.translate=function(e,t,n){var r=n[0],i=n[1],s=n[2],o,u,a,f,l,c,h,p,d,v,m,g;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*s+t[12],e[13]=t[1]*r+t[5]*i+t[9]*s+t[13],e[14]=t[2]*r+t[6]*i+t[10]*s+t[14],e[15]=t[3]*r+t[7]*i+t[11]*s+t[15]):(o=t[0],u=t[1],a=t[2],f=t[3],l=t[4],c=t[5],h=t[6],p=t[7],d=t[8],v=t[9],m=t[10],g=t[11],e[0]=o,e[1]=u,e[2]=a,e[3]=f,e[4]=l,e[5]=c,e[6]=h,e[7]=p,e[8]=d,e[9]=v,e[10]=m,e[11]=g,e[12]=o*r+l*i+d*s+t[12],e[13]=u*r+c*i+v*s+t[13],e[14]=a*r+h*i+m*s+t[14],e[15]=f*r+p*i+g*s+t[15]),e},c.scale=function(e,t,n){var r=n[0],i=n[1],s=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},c.rotate=function(e,n,r,i){var s=i[0],o=i[1],u=i[2],a=Math.sqrt(s*s+o*o+u*u),f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_;return Math.abs(a)<t?null:(a=1/a,s*=a,o*=a,u*=a,f=Math.sin(r),l=Math.cos(r),c=1-l,h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8],E=n[9],S=n[10],x=n[11],T=s*s*c+l,N=o*s*c+u*f,C=u*s*c-o*f,k=s*o*c-u*f,L=o*o*c+l,A=u*o*c+s*f,O=s*u*c+o*f,M=o*u*c-s*f,_=u*u*c+l,e[0]=h*T+m*N+w*C,e[1]=p*T+g*N+E*C,e[2]=d*T+y*N+S*C,e[3]=v*T+b*N+x*C,e[4]=h*k+m*L+w*A,e[5]=p*k+g*L+E*A,e[6]=d*k+y*L+S*A,e[7]=v*k+b*L+x*A,e[8]=h*O+m*M+w*_,e[9]=p*O+g*M+E*_,e[10]=d*O+y*M+S*_,e[11]=v*O+b*M+x*_,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)},c.rotateX=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[4],o=t[5],u=t[6],a=t[7],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*i+f*r,e[5]=o*i+l*r,e[6]=u*i+c*r,e[7]=a*i+h*r,e[8]=f*i-s*r,e[9]=l*i-o*r,e[10]=c*i-u*r,e[11]=h*i-a*r,e},c.rotateY=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i-f*r,e[1]=o*i-l*r,e[2]=u*i-c*r,e[3]=a*i-h*r,e[8]=s*r+f*i,e[9]=o*r+l*i,e[10]=u*r+c*i,e[11]=a*r+h*i,e},c.rotateZ=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[4],l=t[5],c=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i+f*r,e[1]=o*i+l*r,e[2]=u*i+c*r,e[3]=a*i+h*r,e[4]=f*i-s*r,e[5]=l*i-o*r,e[6]=c*i-u*r,e[7]=h*i-a*r,e},c.fromRotationTranslation=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=r+r,a=i+i,f=s+s,l=r*u,c=r*a,h=r*f,p=i*a,d=i*f,v=s*f,m=o*u,g=o*a,y=o*f;return e[0]=1-(p+v),e[1]=c+y,e[2]=h-g,e[3]=0,e[4]=c-y,e[5]=1-(l+v),e[6]=d+m,e[7]=0,e[8]=h+g,e[9]=d-m,e[10]=1-(l+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},c.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=n*u,c=n*a,h=r*u,p=r*a,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-(h+d),e[1]=l+g,e[2]=c-m,e[3]=0,e[4]=l-g,e[5]=1-(f+d),e[6]=p+v,e[7]=0,e[8]=c+m,e[9]=p-v,e[10]=1-(f+h),e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},c.frustum=function(e,t,n,r,i,s,o){var u=1/(n-t),a=1/(i-r),f=1/(s-o);return e[0]=s*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s*2*a,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(i+r)*a,e[10]=(o+s)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*f,e[15]=0,e},c.perspective=function(e,t,n,r,i){var s=1/Math.tan(t/2),o=1/(r-i);return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*o,e[15]=0,e},c.ortho=function(e,t,n,r,i,s,o){var u=1/(t-n),a=1/(r-i),f=1/(s-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*a,e[14]=(o+s)*f,e[15]=1,e},c.lookAt=function(e,n,r,i){var s,o,u,a,f,l,h,p,d,v,m=n[0],g=n[1],y=n[2],b=i[0],w=i[1],E=i[2],S=r[0],x=r[1],T=r[2];return Math.abs(m-S)<t&&Math.abs(g-x)<t&&Math.abs(y-T)<t?c.identity(e):(h=m-S,p=g-x,d=y-T,v=1/Math.sqrt(h*h+p*p+d*d),h*=v,p*=v,d*=v,s=w*d-E*p,o=E*h-b*d,u=b*p-w*h,v=Math.sqrt(s*s+o*o+u*u),v?(v=1/v,s*=v,o*=v,u*=v):(s=0,o=0,u=0),a=p*u-d*o,f=d*s-h*u,l=h*o-p*s,v=Math.sqrt(a*a+f*f+l*l),v?(v=1/v,a*=v,f*=v,l*=v):(a=0,f=0,l=0),e[0]=s,e[1]=a,e[2]=h,e[3]=0,e[4]=o,e[5]=f,e[6]=p,e[7]=0,e[8]=u,e[9]=l,e[10]=d,e[11]=0,e[12]=-(s*m+o*g+u*y),e[13]=-(a*m+f*g+l*y),e[14]=-(h*m+p*g+d*y),e[15]=1,e)},c.str=function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},typeof e!="undefined"&&(e.mat4=c);var h={};h.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},h.rotationTo=function(){var e=o.create(),t=o.fromValues(1,0,0),n=o.fromValues(0,1,0);return function(r,i,s){var u=o.dot(i,s);return u<-0.999999?(o.cross(e,t,i),o.length(e)<1e-6&&o.cross(e,n,i),o.normalize(e,e),h.setAxisAngle(r,e,Math.PI),r):u>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(o.cross(e,i,s),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+u,h.normalize(r,r))}}(),h.setAxes=function(){var e=l.create();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=n[0],e[5]=n[1],e[8]=n[2],h.normalize(t,h.fromMat3(t,e))}}(),h.clone=u.clone,h.fromValues=u.fromValues,h.copy=u.copy,h.set=u.set,h.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},h.setAxisAngle=function(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e},h.add=u.add,h.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*l+o*u+i*f-s*a,e[1]=i*l+o*a+s*u-r*f,e[2]=s*l+o*f+r*a-i*u,e[3]=o*l-r*u-i*a-s*f,e},h.mul=h.multiply,h.scale=u.scale,h.rotateX=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+o*u,e[1]=i*a+s*u,e[2]=s*a-i*u,e[3]=o*a-r*u,e},h.rotateY=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a-s*u,e[1]=i*a+o*u,e[2]=s*a+r*u,e[3]=o*a-i*u,e},h.rotateZ=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*u,e[1]=i*a-r*u,e[2]=s*a+o*u,e[3]=o*a-s*u,e},h.calculateW=function(e,t){var n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=-Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e},h.dot=u.dot,h.lerp=u.lerp,h.slerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3],a=n[0],f=n[1],l=n[2],c=n[3],h,p,d,v,m;return p=i*a+s*f+o*l+u*c,p<0&&(p=-p,a=-a,f=-f,l=-l,c=-c),1-p>1e-6?(h=Math.acos(p),d=Math.sin(h),v=Math.sin((1-r)*h)/d,m=Math.sin(r*h)/d):(v=1-r,m=r),e[0]=v*i+m*a,e[1]=v*s+m*f,e[2]=v*o+m*l,e[3]=v*u+m*c,e},h.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s,u=o?1/o:0;return e[0]=-n*u,e[1]=-r*u,e[2]=-i*u,e[3]=s*u,e},h.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e},h.length=u.length,h.len=h.length,h.squaredLength=u.squaredLength,h.sqrLen=h.squaredLength,h.normalize=u.normalize,h.fromMat3=function(){var e=typeof Int8Array!="undefined"?new Int8Array([1,2,0]):[1,2,0];return function(t,n){var r=n[0]+n[4]+n[8],i;if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(n[7]-n[5])*i,t[1]=(n[2]-n[6])*i,t[2]=(n[3]-n[1])*i;else{var s=0;n[4]>n[0]&&(s=1),n[8]>n[s*3+s]&&(s=2);var o=e[s],u=e[o];i=Math.sqrt(n[s*3+s]-n[o*3+o]-n[u*3+u]+1),t[s]=.5*i,i=.5/i,t[3]=(n[u*3+o]-n[o*3+u])*i,t[o]=(n[o*3+s]+n[s*3+o])*i,t[u]=(n[u*3+s]+n[s*3+u])*i}return t}}(),h.str=function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.quat=h)}(t.exports)})(this);


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
	if(this.tail != null){
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
	},
	
	get vec2(){
		return [this.x,this.y];
	},
	
	get vec3(){
		return [this.x,this.y,this.z];
	},
	
	get vec4(){
		return [this.x,this.y,this.z,this.w];
	},
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
		this.imgs[src].oSrc = src;
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
	this.waitingList.foreach(this.createTexture);
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
			
			image.setFilters = function(min, mag){
				mag = mag ? mag : min;
				ctx.bindTexture(ctx.TEXTURE_2D, this.texture);
				ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, mag);
				ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, min);
			}
			
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
			//snd.currentTime = 0;
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
 * @property {FileManager} instance The singlton instance.
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
//Pointer to the current sprite shader, allows custom effects when drawing sprites (normal mapping)
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
	ctx.uniformMatrix4fv(program.uPMatrix, false, pMatrix);
	ctx.uniformMatrix4fv(program.uMVMatrix, false, mvMatrix);
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
			console.log(gl.getShaderInfoLog(shader));
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
		var attribCount = 0;
		
		fragSrc = fragSrc ? fragSrc : defaultFragSrc;
		frag = compileShader(ctx, fragSrc);
		
		vertSrc = vertSrc ? vertSrc : defaultVertSrc;
		vert = compileShader(ctx, vertSrc);
		
		var newProgram = ctx.createProgram();
		ctx.attachShader(newProgram, vert);
		ctx.attachShader(newProgram, frag);
		ctx.linkProgram(newProgram);
		newProgram.attribCount = attribCount;
		
		if(!ctx.getProgramParameter(newProgram, ctx.LINK_STATUS)){
			console.log("Could not initiate shaders");
		}else{
			
			/*//This may need to be uncommented for legacy code
			newProgram.vertexPositionAttribute = ctx.getAttribLocation(newProgram, "aVertexPosition");
			//println(newProgram.vertexPositionAttribute);
			//ctx.bindAttribLocation(newProgram, 0, "aVertexPosition");
			ctx.enableVertexAttribArray(newProgram.vertexPositionAttribute);
			
			newProgram.textureCoordAttribute = ctx.getAttribLocation(newProgram, "aTextureCoord");
			ctx.enableVertexAttribArray(newProgram.textureCoordAttribute);
			
			newProgram.pMatrixUniform = ctx.getUniformLocation(newProgram, "uPMatrix");
			newProgram.mvMatrixUniform = ctx.getUniformLocation(newProgram, "uMVMatrix");
			
			newProgram.aspect = ctx.getUniformLocation(newProgram, "aspect");*/
			
			if(exists(fragSrc)){
				fragSrc.code = fragSrc.code.replace(new RegExp("; ", "g"), ";\n");
				var lines = fragSrc.code.split("\n");
				for(var line in lines){
					line = lines[line].split(" ");
					if(line[0] == "uniform"){
						var uName = line[2];
						var bIndex = uName.indexOf("[");
						bIndex = bIndex > 0 ? bIndex : uName.indexOf(";");
						uName = uName.substring(0, bIndex);
						if(!exists(newProgram[uName])){
							newProgram[uName] = ctx.getUniformLocation(newProgram, uName);
						}
					}
				}
			}
			
			if(exists(vertSrc)){
				vertSrc.code = vertSrc.code.replace(new RegExp("; ", "g"), ";\n");
				var lines = vertSrc.code.split("\n");
				for(var line in lines){
					line = lines[line].split(" ");
					if(line[0] == "uniform" || line[0] == "attribute"){
						var uName = line[2];
						var bIndex = uName.indexOf("[");
						bIndex = bIndex > 0 ? bIndex : uName.indexOf(";");
						uName = uName.substring(0, bIndex);
						if(!exists(newProgram[uName])){
							if(line[0] == "uniform"){
								newProgram[uName] = ctx.getUniformLocation(newProgram, uName);
							}else{
								newProgram[uName] = ctx.getAttribLocation(newProgram, uName);
								ctx.enableVertexAttribArray(newProgram[uName]);
								newProgram.attribCount++;
							}
						}
					}
				}
			}
			
			return newProgram;
		}
	}
	return null;
}

//Set up sprite shader helpers
function setupSpriteShader(program){
	if(!use2D){
		program.aVertexPosition = ctx.getAttribLocation(program, "aVertexPosition");
		ctx.enableVertexAttribArray(program.aVertexPosition);
		
		program.aTextureCoord = ctx.getAttribLocation(program, "aTextureCoord");
		ctx.enableVertexAttribArray(program.aTextureCoord);
		
		program.attribCount = 2;
		
		program.uPMatrix = ctx.getUniformLocation(program, "uPMatrix");
		program.uMVMatrix = ctx.getUniformLocation(program, "uMVMatrix");
		
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
	spriteVPB.itemSize = 3;
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
	
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, rtTexture, 0);
	
	var depthBuffer = gl.createRenderbuffer();
	gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
	
	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
	
	/*if(!gl.getExtension("WEBKIT_WEBGL_depth_texture")){
		gl.getExtension("MOZ_OES_depth_texture");
	}
	
	var depthTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, depthTexture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    //gl.generateMipmap(gl.TEXTURE_2D);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
	
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTexture, 0);*/
	
	rtBuffer.texture = rtTexture;
	rtBuffer.depthBuffer = depthBuffer;
    
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	return rtBuffer;
}

function updateRenderTarget(gl, rtBuffer, width, height){
	gl.bindFramebuffer(gl.FRAMEBUFFER, rtBuffer);
	rtBuffer.width = width;
	rtBuffer.height = height;
	
	var rtTexture = rtBuffer.texture;
	gl.bindTexture(gl.TEXTURE_2D, rtTexture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    //gl.generateMipmap(gl.TEXTURE_2D);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, rtTexture, 0);
	
	var depthBuffer = rtBuffer.depthBuffer;
	gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
	
	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
	
	rtBuffer.texture = rtTexture;
    
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	return rtBuffer;
}

function createCubeMapRenderTarget(gl, size){
	var cubeBuffer = {};
	cubeBuffer.buffers = [];
	cubeBuffer.width = size;
	cubeBuffer.height = size;
	
	var rtTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_CUBE_MAP, rtTexture);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	for(var i = 0; i < 6; i++){
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X+i, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	cubeBuffer.texture = rtTexture;
	
	var depthBuffer = gl.createRenderbuffer();
	gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, size, size);
	
	for(var i = 0; i < 6; i++){
		var buffer = gl.createFramebuffer();
		gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
		buffer.width = size;
		buffer.height = size;
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X+i, rtTexture, 0);
		
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
		
		cubeBuffer.buffers.push(buffer);
	}
    
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	return cubeBuffer;
}

//Sets up a pool of screen buffers
sBuffers.buffers = new Array();

//Returns either the first unlocked buffer in the array or creates a new one, pushes it into the array, and returns it.
sBuffers.getBuffer = function(bwidth, bheight){
	var width = bwidth ? bwidth : canvas.width;
	var height = bheight ? bheight : canvas.height;
	for(var i=0; i < this.buffers.length; i++){
		var buffer = this.buffers[i]
		if(!buffer.locked){
			if(buffer.width != width || buffer.height != height){
				//console.log("updating: ", buffer.width, width)
				updateRenderTarget(ctx, buffer, width, height);
			}
			//this.buffers[buf].locked = true;
			return buffer;
		}
	}
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
//defaultFragSrc.code = "precision mediump float; varying vec2 vTextureCoord; void main(void){ gl_FragColor = vec4(1.0,1.0,1.0,1.0); }";
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
 * @property {number} offsetX The x position of the sprite's origin within the sprite. By default this is the top left corner.
 * @property {number} offsetY The y position of the sprite's origin within the sprite. By default this is the top left corner.
 * @property {Sprite} parent The sprite's parent sprite.
 * @property {Vector} pos The sprite's position relative to its parent's position.
 * @property {number} rotation The rotation of the sprite in radians. Use DTR(degreees) to easily convert degrees to radians.
 * @property {number} scaleX The amount to scale the sprite along the x axis.
 * @property {number} scaleY The amount to scale the sprite along the y axis.
 * @property {number} scrollX The distance to scroll the sprite's image within its bounds along the x axis.
 * @property {number} scrollY The distance to scroll the sprite's image within its bounds along the y axis.
 * @property {Shader} shader When drawing with webGL, if set this shader will be used to draw the sprite instead of the default shader.
 * @property {number} sliceHeight The height of the slice to be sampled within the sprite's image starting from sliceY. This allows drawing only portions of the image.
 * @property {number} sliceWidth The width of the slice to be sampled within the sprite's image starting from sliceX. This allows drawing only portions of the image.
 * @property {number} sliceX The x position within the sprite's image to start sampling from. This allows drawing only portions of the image.
 * @property {number} sliceY The y position within the sprite's image to start sampling from. This allows drawing only portions of the image.
 * @property {number} tilesX The number of times to tile the sprite's image within its bounds along the x axis. Allows decimal values.
 * @property {number} tilesY The number of times to tile the sprite's image within its bounds along the y axis. Allows decimal values.
 * @property {bool} visible If false the sprite will not be drawn and neither will its children. Does not affect updating.
 * @property {number} width The unscaled width of the sprite.
 * @property {number} worldRotation Setter/getter for sprite.rotation relative to the sprite's parent's rotation.
 * @property {number} x Setter/getter for sprite.pos.x
 * @property {number} y Setter/getter for sprite.pos.y
 * @property {number} z Setter/getter for sprite.pos.z
 */
function Sprite(){
	this.children = new List();
	this.image = new Image();
	this.pos = new Vector(0,0,0);
	this.index = 0;
	this.blendFunction = {a:"SRC_ALPHA", b:"ONE_MINUS_SRC_ALPHA"};
	this.multColor = new Vector(1,1,1);
	this.parent = null;
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
	
	get wx(){
		return this.getWorldPos()[0];
	},
	set wx(val){
		this.x = exists(this.parent) ? this.parent.worldToLocal(val,0)[0] : val;
	},
	
	get wy(){
		return this.getWorldPos()[1];
	},
	set wy(val){
		this.y = exists(this.parent) ? this.parent.worldToLocal(0,val)[1] : val;
	},
	
	get wz(){
		return this.getWorldPos()[2];
	},
	set wz(val){
		this.z = exists(this.parent) ? this.parent.worldToLocal(0,0)[2] : val;
	},
	
	get degRotation(){
		return RTD(this.rotation);
	},
	set degRotation(val){
		this.rotation = DTR(val);
	},
	
	get worldRotation(){
		var sSign = (this.getScaleX()/Math.abs(this.getScaleX()))*this.getScaleY()/Math.abs(this.getScaleY());
		return exists(this.parent) ? this.parent.worldRotation+this.rotation*sSign : this.rotation*sSign;
	},
	set worldRotation(val){
		var sSign = (this.getScaleX()/Math.abs(this.getScaleX()))*this.getScaleY()/Math.abs(this.getScaleY());
		this.rotation = exists(this.parent) ? (val*sSign)-this.parent.worldRotation : val*sSign;
	},
	
	get degWorldRotation(){
		return RTD(this.worldRotation);
	},
	set degWorldRotation(val){
		this.worldRotation = DTR(val);
	},
	
	get originX(){
		return -this.offsetX;
	},
	set originX(val){
		this.offsetX = -val;
	},
	
	get originY(){
		return -this.offsetY;
	},
	set originY(val){
		this.offsetY = -val;
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
Sprite.prototype.offsetX = 0;
Sprite.prototype.offsetY = 0;
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
	ctx.translate(this.offsetX,this.offsetY);
}

/**
 * Draws the sprite to the given drawing context. This can be overidden for custom drawing, just make sure to call this.drawChildren(ctx); at the end of the custom function.
 * 
 * @param {Drawing Context} ctx
 */
Sprite.prototype.draw = function(ctx){
	if(this.image != undefined && this.image != null){
		try{
			ctx.drawSprite(this, this.frame);
			/*if(this.frameCount <= 1){
				ctx.drawSprite(this);
			}else{
				ctx.drawSprite(this, this.frame);
				this.frame = (this.frame+1)%this.frameCount;
			}*/
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
		if(sprite instanceof Sprite && sprite.visible){
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

//If overriding update make sure to call either Sprite.update.call(this, ctx) or this.__proto__.update.call(this, ctx) or just call updateChildren(ctx)
/**
 * The default update function called every update. Does nothing by default except call updateChildren. When overriding make sure to call Sprite.update.call(this, ctx), this.__proto__.update.call(this, ctx), or this.updateChildren(ctx).
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
Sprite.prototype.getScaleX = function(){
	if(exists(this.parent)){
		return this.parent.getScaleX()*this.scaleX;
	}
	return this.scaleX;
}

/**
 * Returns the y scale relative to the sprite's parent's scale.
 * 
 * @return {number} The world y scale.
 */
Sprite.prototype.getScaleY = function(){
	if(exists(this.parent)){
		return this.parent.getScaleY()*this.scaleY;
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
	if(exists(this.parent)){
		mat = this.parent.getWorldMatrix();
	}
	mat4.translate(mat, mat, [this.x,this.y, this.z]);
	mat4.rotateZ(mat, mat, this.rotation);
	mat4.scale(mat, mat, [this.scaleX,this.scaleY, 1.0]);
	mat4.translate(mat, mat, [this.offsetX,this.offsetY, 0]);
	return mat;
}

/**
 * Returns the sprite's position in world space.
 * 
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.getWorldPos = function(){
	var mat = this.getWorldMatrix();
	mat4.translate(mat, mat, [-this.offsetX,-this.offsetY, 0]);
	var out = [0,0,0];
	//return mat4.multiplyVec3(mat, [0,0,0]);
	return vec3.transformMat4(out,out,mat)
}

/**
 * Returns the world position of a local point.
 * 
 * @param {number} x The x coordinate within the sprite.
 * @param {number} y The y coordinate within the sprite.
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.localToWorld = function(x,y){
	var out = [x,y,0];
	//return mat4.multiplyVec3(this.getWorldMatrix(), [x,y,0]);
	return vec3.transformMat4(out, out, this.getWorldMatrix());
}

/**
 * Returns the given world position as a point within the sprite.
 * 
 * @param {number} x The x coordinate in world space.
 * @param {number} y The y coordinate in world space.
 * @return {Array} The position vector as an array of length 3.
 */
Sprite.prototype.worldToLocal = function(x,y){
	/*var pos = vec3.subtract([x,y,0], this.getWorldPos());
	var scaleX = this.scaleX == 0 ? 0.0000001 : this.scaleX;
	var scaleY = this.scaleY == 0 ? 0.0000001 : this.scaleY;
	var mat = mat4.scale(mat4.rotateZ(mat4.identity(mat4.create()), -this.worldRotation), [this.getScaleX(),this.getScaleY(), 1.0]);
	mat4.translate(mat,[-this.offsetX,-this.offsetY, 0]);
	return mat4.multiplyVec3(mat, pos);*/
	
	var out = [x,y,0];
	
	//return mat4.multiplyVec3(mat4.inverse(this.getWorldMatrix()), [x,y,0]);
	var mat = this.getWorldMatrix();
	return vec3.transformMat4(out, out, mat4.invert(mat,mat));
}

Sprite.prototype.setLocalToWorld = function(x,y){
	var pos = exists(this.parent) ? this.parent.worldToLocal(x,y) : [this.x,this.y,0];
	this.x = pos[0];
	this.y = pos[1];
}

Sprite.prototype.pointsInside = function(points){
	var minX = 0;
	var maxX = this.width;
	var minY = 0;
	var maxY = this.height;
	var x = 0;
	var y = 0;
	
	var results = [];
	var result = null;
	
	var worldMat = this.getWorldMatrix();
	for(var point in  points){
		point = points[point];
		//point = mat4.multiplyVec3(mat4.inverse(worldMat), [point[0],point[1],0]);
		point = [point[0],point[1],0];
		point = vec3.transformMat4(point, point, mat4.inverse(worldMat));
		
		x = point[0];
		y = point[1];
		
		result = {};
		result.minX = x >= minX;
		result.maxX = x <= maxX;
		result.minY= y >= minY;
		result.maxY = y <= maxY;
		
		results.push(result);
	}
	
	return results;
}

Sprite.prototype.checkPoint = function(x,y){
	var result = this.pointsInside([[x,y]])[0];
	return result.minX && result.maxX && result.minY && result.maxY;
}

/**
 * Calls remove on all of the sprite's children and removes itself from its parent's list of children.
 */
Sprite.prototype.remove = function(){
	for(var child = this.children.head; child !== null; child = child.link){
		child.item.remove();
	}
	if(exists(this.parent)){
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
	this.wheelFuncs = new Array();
	this.mdListens = new Array();
	this.muListens = new Array();
	this.mmListens = new Array();
	this.mwListens = new Array();
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
	keyCode = isNaN(keyCode) ? keyCode.charCodeAt(0) : keyCode;
	//console.log(keyCode)
	this.keys[keyCode] = boolName;
	this.bools[boolName] = false;
	/*this.__defineGetter__(boolName, function(){
		return this.bools[boolName];
	});*/
	Object.defineProperty(this, boolName, {
		configurable: true,
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
 * Adds a function to be called when the mouse wheel is scrolled.
 * 
 * @param {function} func A function to be called.
 */
Input.prototype.addWheelFunc = function(func){
	this.wheelFuncs.push(func);
}

/**
 * Removes a function to be called when the mouse wheel is scrolled.
 * 
 * @param {function} func The function to be removed.
 */
Input.prototype.removeWheelFunc = function(func){
	for(var f in this.wheelFuncs){
		if(this.wheelFuncs[f] == func){
			this.wheelFuncs[f] = null;
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

/**
 * Adds an object to be notified when the mouse is scrolled. The object must have the function onMouseWheel().
 * 
 * @param {Object} obj An object with an onMouseMove function.
 */
Input.prototype.addMouseWheelListener = function(obj){
	this.mwListens.push(obj);
}

/**
 * Removes an object from the list of objects to be notified when the mouse is scrolled.
 * 
 * @param {Object} obj The object to be removed.
 */
Input.prototype.removeMouseWheelListener = function(obj){
	for(var o in this.mwListens){
		if(this.mwListens[o] == obj){
			this.mwListens[o] = null;
			break;
		}
	}
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

Input.prototype.mouseMove = function(e){
	if(!e) e = window.event;
	//println(e.pageY);
	this.setMouse(e.pageX, e.pageY);
	/*this.mouse.x = e.pageX-canvas.offsetLeft;
	this.mouse.y = e.pageY-canvas.offsetTop;
	
	if(display != undefined && display.style.position == "relative"){
		this.mouse.x -= display.offsetLeft;
		this.mouse.y -= display.offsetTop;
	}
	
	this.mouse.x /= canvas.scaleX;
	this.mouse.y /= canvas.scaleY;*/
	
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
	/*this.mouse.x = e.pageX-canvas.offsetLeft;
	this.mouse.y = e.pageY-canvas.offsetTop;
	
	if(display != undefined && display.style.position == "relative"){
		this.mouse.x -= display.offsetLeft;
		this.mouse.y -= display.offsetTop;
	}
	
	this.mouse.x /= canvas.scaleX;
	this.mouse.y /= canvas.scaleY;*/
	
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
	/*this.mouse.x = e.pageX-canvas.offsetLeft;
	this.mouse.y = e.pageY-canvas.offsetTop;
	
	if(display != undefined && display.style.position == "relative"){
		this.mouse.x -= display.offsetLeft;
		this.mouse.y -= display.offsetTop;
	}
	
	this.mouse.x /= canvas.scaleX;
	this.mouse.y /= canvas.scaleY;*/
	
	//for(var obj in this.muListens){
	for(var obj = 0; obj < this.muListens.length; obj++){
		if(this.muListens[obj] != null){
			this.muListens[obj].onMouseUp(e.button);
		}
	}
	return false;
}

Input.prototype.mouseWheel = function(e){
	if(!e) e = window.event;
	var x = e.wheelDeltaX ? e.wheelDeltaX/40 : 0;
	var y = e.wheelDeltaY ? e.wheelDeltaY/40 : -e.detail;
	
	this.setMouse(e.pageX, e.pageY);
	
	for(var func = 0; func < this.wheelFuncs.length; func++){
		if(this.wheelFuncs[func] != null){
			this.wheelFuncs[func](x, y);
		}
	}
	
	for(var obj = 0; obj < this.mwListens.length; obj++){
		if(this.mwListens[obj] != null){
			this.mwListens[obj].onMouseWheel(x, y);
		}
	}
	e.preventDefault();
	return false;
}

Input.prototype.handleKeyDown = function(e){
	var key = e.keyCode;
	if(this.printKey){
		console.log("down: "+key);//+": "+e.keyIdentifier);
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
		console.log("up: "+key);
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
		console.log("press: "+key);
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
	//this.init();
	Sprite.call(this);
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
	Sprite.call(this);
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
	//this.init();
	GUIElement.call(this);
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

/*
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
	var lines = this.text.split("\n");
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
}*/

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
	
	//this.offsetX = xoff;
	//this.offsetY = yoff;
	
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

TextBox.prototype.transform = function(ctx){
	if(this.center){
		var dims = this.getDims();
		this.offsetX = -dims.x/2;
		this.offsetY = -dims.y/2;
	}
	Sprite.prototype.transform.call(this, ctx);
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
	//this.init();
	GUIElement.call(this);
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
	//this.init();
	GUIElement.call(this);
	this.label = new TextBox(label);
	this.label.minWidth = 0;
	this.addChild(this.label);
	this.width = this.label.getDims().x;
	this.height = this.label.getDims().y;
	this.bbox = new BRect(0, 0, this.width, this.height);
	this.func = func;
	
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

/**
 * Creates a new instance of Widget.
 * 
 * @class Widgets allow you to add HTML elements on top of the game canvas without blocking input to the game. Each widget is a free-floating div element that can have any HTML content added to it.
 * @param {string} html Initial HTML content for the widget.
 * @param {number} x Initial x position of the widget.
 * @param {number} y Initial y position of the widget.
 * @param {number} width Initial width of the widget.
 * @param {number} height Initial height of the widget.
 * @property {number} x Sets/gets the widget's x position.
 * @property {number} y Sets/gets the widget's y position.
 * @property {number} top Sets/gets the widget's position so that its top edge is at the given position.
 * @property {number} bottom Sets/gets the widget's position so that its bottom edge is at the given position.
 * @property {number} left Sets/gets the widget's position so that its left edge is at the given position.
 * @property {number} right Sets/gets the widget's position so that its right edge is at the given position.
 * @property {number} width Sets/gets the widget's width.
 * @property {number} height Sets/gets the widget's height.
 * @property {string} html Sets/gets the HTML code for the widget's content div.
 * @property {div} content The content div of the widget. This has all of the properties any HTML div would have.
 * @property {div style} style The style object of the content div of the widget. This has all of the properties any HTML style object would have.
 */
function Widget(html, x, y, width, height){
	var div = document.createElement('div');
	this.div = div;
	
	var content = document.createElement('div');
	div.appendChild(content);
	this.content = content;
	this.style = content.style;
	
	this.html = html;
	
	div.style.position = "absolute";
	//div.style.overflow = "auto";
	//div.style.margin = "auto";
	//div.style.border = "solid thin white";
	//div.style.display = "inline-block";
	//div.style.float = "left";
	
	content.style.overflow = "auto";
	content.style.color = "#000000";
	
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.state = null;
	
	var widget = this;
	window.addEventListener("mouseup", function(){widget.dragging = false;}, false);
	
	/*this.div.draggable = true;
	var curWidget = this;
	this.div.ondragstart = function(e){curWidget.startDrag(e);};
	this.div.ondrag = function(e){curWidget.drag(e);};
	this.div.ondragend = function(e){curWidget.stopDrag(e);};//function(d){println("hello");}*/
}

Widget.prototype.x = 0;
Widget.prototype.y = 0;
Widget.prototype.top = 0;
Widget.prototype.bottom = 0;
Widget.prototype.left = 0;
Widget.prototype.right = 0;
Widget.prototype.width = 0;
Widget.prototype.height = 0;
Widget.prototype.html = "";
Widget.prototype.content = document.createElement('div');
Widget.prototype.style = Widget.prototype.content.style;

Widget.prototype = {
	get top(){
		var strVal = this.div.style.top;
		return strVal.substr(0,strVal.length-2);
	},
	set top(val){
		this.div.style.top = val;
		this.div.style.bottom = "";
	},
	
	get bottom(){
		var strVal = this.div.style.bottom;
		return strVal.substr(0,strVal.length-2);
	},
	set bottom(val){
		this.div.style.bottom = val;
		this.div.style.top = "";
	},
	
	get left(){
		var strVal = this.div.style.left;
		return strVal.substr(0,strVal.length-2);
	},
	set left(val){
		this.div.style.left = val;
		this.div.style.right = "";
	},
	
	get right(){
		var strVal = this.div.style.right;
		return strVal.substr(0,strVal.length-2);
	},
	set right(val){
		this.div.style.right = val;
		this.div.style.left = "";
	},
	
	get x(){
		return this.div.offsetLeft;
	},
	set x(val){
		if(this.limitXY && exists(this.div.parentNode)){
			val = Math.max(val, this.minX);
			val = Math.min(val, this.div.parentNode.offsetWidth-this.maxX);
		}
		this.left = val;
	},
	
	get y(){
		return this.div.offsetTop;
	},
	set y(val){
		if(this.limitXY && exists(this.div.parentNode)){
			val = Math.max(val, this.minY);
			val = Math.min(val, this.div.parentNode.offsetHeight-this.maxY);
		}
		this.top = val;
	},
	
	get width(){
		//println(this.content.offsetWidth);
		var strVal = this.style.width;
		return this.div.offsetWidth;//strVal.substr(0,strVal.length-2);
	},
	set width(val){
		this.style.width = val;
	},
	
	get height(){
		var strVal = this.style.height;
		return this.div.offsetHeight;//strVal.substr(0,strVal.length-2);
	},
	set height(val){
		this.style.height = val;
	},
	
	get html(){
		return this.content.innerHTML;
	},
	set html(val){
		this.content.innerHTML = val;
	},
	
	get hidden(){
		return this.div.style.visibility != "hidden" && this.height == 0;
	},
	set hidden(val){
		if(!val){
			this.div.style.visibility = "hidden";
			this.hiddenHeight = this.height;
			this.height = 0;
		}else{
			this.div.style.visibility = "visible";
			if(this.height == 0){
				this.height = this.hiddenHeight;
			}
		}
	},
	
	get visible(){
		return this.div.style.visibility != "hidden";
	},
	set visible(val){
		if(!val){
			this.div.style.visibility = "hidden";
		}else{
			this.div.style.visibility = "visible";
		}
	},
}

Widget.prototype.div = document.createElement('div');
Widget.prototype.content = document.createElement('div');
Widget.prototype.style = Widget.prototype.div.style;
Widget.prototype.dragger = null;
Widget.prototype.dragging = false;
Widget.prototype.dragX = 0;
Widget.prototype.dragY = 0;
Widget.prototype.limitXY = true;
Widget.prototype.minX = 0;
Widget.prototype.maxX = 0;
Widget.prototype.minY = 0;
Widget.prototype.maxY = 0;
Widget.prototype.hiddenWidth = 0;
Widget.prototype.hiddenHeight = 0;

/**
 * Appends the widget to the given div.
 * 
 * @param {Object} div The div to append to.
 */
Widget.prototype.addTo = function(div){
	return div.appendChild(this.div);
}

/**
 * Removes the widget from the given div.
 * 
 * @param {Object} div The div to remove from.
 */
Widget.prototype.removeFrom = function(div){
	div = div ? div : this.div.parentNode;
	if(div != null){
		return div.removeChild(this.div);
	}
	
	if(this.state != null){
		this.state.widgets.remove(this);
	}
}

/**
 * Appends an HTML element to the content div.
 * 
 * @param {Object} child The element to be append.
 */
Widget.prototype.appendChild = function(child){
	return this.content && child ? this.content.appendChild(child) : undefined;
}

/**
 * Removes an HTML element from the content div.
 * 
 * @param {Object} child The element to be removed.
 */
Widget.prototype.removeChild = function(child){
	return this.content && child ? this.content.removeChild(child) : undefined;
}

/**
 * Creates a new HTML element, appends it to the content div (or parent if specified), and returns a reference to it.
 * 
 * @param {Object} type The type of element to create.
 * @param {Object} parent Optional: An alternative parent element to append the new element to.
 * @return {Object} The new element.
 */
Widget.prototype.add = function(type, parent){
	var element = document.createElement(type);
	if(parent != undefined){
		return parent.appendChild(element);
	}
	return this.appendChild(element);
}

/**
 * Sets then given element as this widget's dragger. When the given element is dragged the widget will drag with it.
 * 
 * @param {Object} obj The element that will initiate drags on the widget.
 */
Widget.prototype.setDragger = function(obj){
	if(this.dragger != null){
		this.dragger.style.cursor = "auto";
		this.dragger.onmousedown = null;
		this.dragger.onmouseup = null;
	}
	if(obj != null){
		var curWidget = this;
		obj.style.cursor = "move";
		obj.onmousedown = function(){
			curWidget.startDrag()
		}
		obj.onmouseup = function(){
			curWidget.stopDrag();
		}
	}
	this.dragger = obj;
}

Widget.prototype.startDrag = function(e){
	this.dragging = true;
	this.dragX = this.x-gInput.mouse.x;
	this.dragY = this.y-gInput.mouse.y;
}

Widget.prototype.drag = function(e){
	//gInput.mouseMove(e);
	this.x = gInput.mouse.x+this.dragX;
	this.y = gInput.mouse.y+this.dragY;
}

Widget.prototype.whileDragging = function(e){
}

Widget.prototype.stopDrag = function(e){
	if(this.dragging){
		this.x = gInput.mouse.x+this.dragX;
		this.y = gInput.mouse.y+this.dragY;
	}
	this.dragging = false;
}

Widget.prototype.update = function(d){
	//println(gInput.lBtn)
	if(this.dragging){
		this.x = gInput.mouse.x+this.dragX;
		this.y = gInput.mouse.y+this.dragY;
		this.whileDragging();
	}
}

var gameLoop;
var oldTime;
var MSPF = 17;
var FPS = 60;
var brinePaused = false;
var brineBlurred = false;
var pauseOnBlurred = true;
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
var brineFPS = 0;
var oldDrawTime = 0;
var fpsCounter = new Widget(0,0,0,60,15);
fpsCounter.style.color = "#ffffff";
fpsCounter.style.background = "black";
fpsCounter.style.opacity = "0.75";
fpsCounter.visible = false;
/*var unpauseBtn = new Widget("",0,0,"","");
unpauseBtn.style.background = "black";
unpauseBtn.btn = unpauseBtn.add("button");
unpauseBtn.btn.innerHTML = "Resume";
unpauseBtn.btn.onclick = function(){
	brinePaused = false;
	unpauseBtn.removeFrom();
}*/
//fpsCounter.style.opacity = "0.75";

Math.sign = function(val){
	val = val != 0 ? val : 1;
	return val/Math.abs(val);
}

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
	
	//display = document.getElementById("display");
	display = document.createElement('div');
	canvas.parentElement.replaceChild(display,canvas);
	display.appendChild(canvas);
	if(display != undefined){
		display.style.width = canvas.offsetWidth;//Math.max(canvas.width, canvas.style.width.replace("px",""));
		display.style.height = canvas.offsetHeight;//Math.max(canvas.height, canvas.style.height.replace("px",""));
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
	
	fpsCounter.addTo(display);
	fpsCounter.style.fontSize = "10px";
	
	brineConsole = document.getElementById("console");
	
	//Attempts to create a 3D context falling back to 2D if 3D is unavailable
	if(canvas.getContext){
		try{
			if(!use2D){
				ctx = canvas.getContext("experimental-webgl", {alpha: true, preserveDrawingBuffer: true});
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
	canvas.addEventListener('mousewheel',canvasMouseWheel,false);
	canvas.addEventListener('DOMMouseScroll',canvasMouseWheel,false);
	
	/**
	 * Called when the browser tab/window loses focus. Override for a custom action when the game loses focus.
	 */
	canvas.onBrinePaused = function(){
		/*unpauseBtn.addTo(display);
		unpauseBtn.x = canvas.width/2-unpauseBtn.width/2;
		unpauseBtn.y = canvas.height/2-unpauseBtn.height/2;
		brinePaused = true;*/
	}
	
	window.onfocus = function(){
		brineBlurred = false;
	}
	
	window.onblur = function(){
		//brinePaused = true;
		//println("paused");
		brineBlurred = true;
		if(pauseOnBlurred && !brinePaused){
			canvas.onBrinePaused();
		}
	}
	
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
function canvasMouseWheel(e){
	if(!e) e = window.event;
	if(useStates){
		States.current().input.mouseWheel(e);
	}
	gInput.mouseWheel(e);
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
	
	if(!oldTime || brinePaused || (brineBlurred && pauseOnBlurred)){
		oldTime = time;
	}
	//if(brinePaused){println("unpaused:"+(time-oldTime)/MSPF);}
	if(!brinePaused){
		if(brineBlurred && pauseOnBlurred){
			canvas.onBrinePaused();
		}
		var delta = (time-oldTime)/MSPF;
		oldTime = time;
		delta = Math.min(100,delta);
		//println(delta);
		for(; delta > 0; delta--){
			var updateScale = delta > 1 ? 1 : delta;
			if(useStates){
				States.update(updateScale);
			}
			
			world.update(updateScale);
		}
	}
	
	draw(time);
	
	//brineBlurred = false;
	
	gameLoop = requestAnimationFrame(update);
}

/**
 * Clears the canvas and calls draw on the state manager/world.
 * Currently also does brineConsole display stuff, but that should be relocated.
 */
function draw(time){
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
	
	mat4.ortho(pMatrix, -0, 1*aspectRatio, -1, 0, -1, 1);
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
	
	var timeDiff = time-oldDrawTime;
	brineFPS = Math.round((1000/timeDiff)*10)/10;
	fpsCounter.html = "FPS: "+brineFPS;
	oldDrawTime = time;
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
		mat4.multiply(tempMat, mvMatrix, identityMat);
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
			this.lineSprite.offsetY = -this.lineSprite.height/2;
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
		
		mat4.scale(mvMatrix, mvMatrix, [x, y, 1.0]);
		if(use2D){
			return ctxProto.scale.call(this, x, y);
		}
	}
	
	ctx.rotate = function(angle){
		mat4.rotateZ(mvMatrix, mvMatrix, -angle);
		if(use2D){
			return ctxProto.rotate.call(this, angle);
		}
	}
	
	ctx.translate = function(x, y){
		mat4.translate(mvMatrix, mvMatrix, [x*aspectRatio/canvas.width, -y/canvas.height, 0.0]);
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
		ctx.currentBuffer = null;
		ctx.setBuffer = function(buffer){
			ctx.currentBuffer = buffer;
			this.bindFramebuffer(this.FRAMEBUFFER, buffer);
		}
		
		//Simplifies binding textures
		ctx.bindTexTo = function(texture, uniform, num){
			if(exists(texture)){// && exists(uniform)){
				num = num ? num : 0;
				this.activeTexture(this.TEXTURE0+num);
				this.bindTexture(this.TEXTURE_2D, texture);
				this.uniform1i(uniform, num);
			}
		}
		
		var oldUseProgram = ctx.useProgram;
		ctx.useProgram = function(program){
			oldUseProgram.call(this, program);
			for(var i = 0; i < 10; i++){
				if(i < program.attribCount){
					this.enableVertexAttribArray(i);
				}else{
					this.disableVertexAttribArray(i);
				}
			}
		}
		
		ctx.drawScreenBuffer = function(shader, clearBuffer, width, height, blendFunc){
			this.useProgram(shader);
			mat4.identity(mvMatrix);
			mat4.scale(mvMatrix, mvMatrix, [aspectRatio, 1, 1.0]);
			
			width = width ? width : this.viewportWidth;
			height = height ? height : this.viewportHeight;
			
			//this.viewport(0, 0, this.viewportWidth, this.viewportHeight);
			this.viewport(0, 0, width, height);
			if(clearBuffer){
				this.clear(this.COLOR_BUFFER_BIT);
			}
			
			blendFunc = blendFunc ? blendFunc : {a:"ONE", b:"ONE_MINUS_SRC_ALPHA"};
			//this.blendFunc(this.ONE, this.ONE_MINUS_SRC_ALPHA); //This might need to be taken out if there is some buffer drawing issue down the line.
			this.blendFuncSeparate(ctx[blendFunc.a], ctx[blendFunc.b], ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA);
			//this.blendFuncSeparate(ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA, ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA);
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVPB);
			this.vertexAttribPointer(shader.aVertexPosition, spriteVPB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVTB);
			this.vertexAttribPointer(shader.aTextureCoord, spriteVTB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, spriteVIB);
			setMatrixUniforms(shader);
			this.drawElements(this.TRIANGLES, spriteVIB.numItems, this.UNSIGNED_SHORT, 0);
			
			mat4.identity(mvMatrix);
			
			this.blendFunc(this.ONE, this.ONE_MINUS_SRC_ALPHA);
		}
		
		ctx.fillRect = function(shader, x, y, width, height, blendFunc){
			this.useProgram(shader);
			
			mat4.identity(mvMatrix);
			mat4.scale(mvMatrix, mvMatrix, [aspectRatio, 1, 1.0]);
			
			width = width ? width : this.currentBuffer.width;
			height = height ? height : this.currentBuffer.height;
			
			this.viewport(x, y, width, height);
			
			blendFunc = blendFunc ? blendFunc : {a:"ONE", b:"ONE_MINUS_SRC_ALPHA"};
			//this.blendFunc(this.ONE, this.ONE_MINUS_SRC_ALPHA); //This might need to be taken out if there is some buffer drawing issue down the line.
			this.blendFuncSeparate(ctx[blendFunc.a], ctx[blendFunc.b], ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA);
			//this.blendFuncSeparate(ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA, ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA);
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVPB);
			this.vertexAttribPointer(shader.aVertexPosition, spriteVPB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ARRAY_BUFFER, spriteVTB);
			this.vertexAttribPointer(shader.aTextureCoord, spriteVTB.itemSize, this.FLOAT, false, 0, 0);
			
			this.bindBuffer(this.ELEMENT_ARRAY_BUFFER, spriteVIB);
			setMatrixUniforms(shader);
			this.drawElements(this.TRIANGLES, spriteVIB.numItems, this.UNSIGNED_SHORT, 0);
			
			mat4.identity(mvMatrix);
			
			this.blendFunc(this.ONE, this.ONE_MINUS_SRC_ALPHA);
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
			var x = 0;//sprite.offsetX;
			var y = 0;//sprite.offsetY;
			
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
			
				mat4.translate(mvMatrix, mvMatrix, [x*aspectRatio/canvas.width, y/canvas.height, 0.0]);
				
				//If the width or height is 0 the changes to the matrix can't be reversed
				width = Math.max(0.0000001, width);
				height = Math.max(0.0000001, height);
				mat4.scale(mvMatrix, mvMatrix, [width*aspectRatio/canvas.width, height/canvas.height, 1.0]);
				
				//renderShader = spriteShader;
				
				if(exists(sprite.shader)){
					renderShader = sprite.shader;
				}
				
				ctx.useProgram(renderShader);
				
				ctx.bindBuffer(ctx.ARRAY_BUFFER, spriteVPB);
				ctx.vertexAttribPointer(renderShader.aVertexPosition, spriteVPB.itemSize, ctx.FLOAT, false, 0, 0);
				
				ctx.bindBuffer(ctx.ARRAY_BUFFER, spriteVTB);
				ctx.vertexAttribPointer(renderShader.aTextureCoord, spriteVTB.itemSize, ctx.FLOAT, false, 0, 0);
				
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
					/*this.spriteBCTX.drawImage(image, frameXOff+adscrollX, frameYOff+adscrollY, q0Width, q0Height, x, y, (q0Width/frameWidth)*width, (q0Height/frameHeight)*height);
					this.spriteBCTX.drawImage(image, frameXOff, frameYOff+adscrollY, q1Width, q1Height, (x+(width-scrollX)), y, (q1Width/frameWidth)*width, (q1Height/frameHeight)*height);
					this.spriteBCTX.drawImage(image, frameXOff, frameYOff, q2Width, q2Height, (x+(width-scrollX)), (y+(height-scrollY)), (q2Width/frameWidth)*width, (q2Height/frameHeight)*height);
					this.spriteBCTX.drawImage(image, frameXOff+adscrollX, frameYOff, q3Width, q3Height, x, (y+(height-scrollY)), (q3Width/frameWidth)*width, (q3Height/frameHeight)*height);*/
					
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
				
				mat4.scale(mvMatrix, mvMatrix, [1/(width*aspectRatio/canvas.width), 1/(height/canvas.height), 1.0]);
				mat4.translate(mvMatrix, mvMatrix, [-x*aspectRatio/canvas.width, -y/canvas.height, 0.0]);
				
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
 * Toggles the visibility of the brineConsole.
 */
function toggleConsole(){
	if(showConsole){
		showConsole = false;
	}else{
		showConsole = true;
	}
}

/**
 * Prints the string value of the given object to the brineConsole without a new line.
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
 * Prints the string value of the given object to the brineConsole with a new line.
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
 * Returns the sign of the number.
 */
function sign(n){
	return (n == 0) ? 1 : Math.abs(n)/n;
}

/**
 * Theoretically determines the name of the object's class. However, it is not thouroughly tested and may fail in some cases.
 * 
 * @param {Object} obj The object to find the class of.
 * @return {string} The object's class name.
 */
function getClassName(obj){
	var types = [];
	for(var prop in window){
		if(window[prop] instanceof Function){
			if(obj instanceof window[prop]){
				types.push(prop);
			}
		}
	}
	var type;
	for(var i = 0; i < types.length; i++){
		type = types[i];
		for(var j = i+1; j < types.length; j++){
			if(new window[types[j]]() instanceof window[type]){
				type = types[j];
				break;
			}
		}
	}
	return type;
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
	var strings = document.cookie ? document.cookie.split("; ") : [];
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