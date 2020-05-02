{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf820
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red27\green29\blue31;}
{\*\expandedcolortbl;;\cssrgb\c14118\c15294\c16078;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl300\partightenfactor0

\f0\fs26 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var http = require('http');\
var fs = require('fs');\
var index = fs.readFileSync('index.html');\
\
http.createServer(function (req, res) \{\
  res.writeHead(200, \{'Content-Type': 'text/html\'92\});\
  res.end(index);\
\}).listen(process.env.PORT);\
}