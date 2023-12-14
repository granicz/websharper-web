import { build } from 'esbuild'

var options =
    {
        entryPoints: ['./wwwroot/Scripts/WebSharper/MyCS01/root.js'],
        bundle: true,
        minify: true,
        format: 'iife',
        outfile: 'wwwroot/Scripts/WebSharper/bundle.js',
        globalName: 'wsbundle'
    };

build(options);