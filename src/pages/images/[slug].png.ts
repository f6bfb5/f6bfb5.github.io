import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { getAllBlogsStatic } from "../../scripts/blog";

// import FusionPixel from '/fusion-pixel-12px-proportional-zh_hant.otf';
import fs from 'fs';
import path from 'path';
const FusionPixel = fs.readFileSync(path.resolve('./src/styles/fonts/fusion-pixel-12px-proportional-zh_hant.otf'));

export async function getStaticPaths() {
    const content = await getAllBlogsStatic();
    return content;
}

const height = 630;
const width = 1200;

export async function GET({ url, params, props }: APIContext) {
  const { slug } = params;
  const data = props.blog.data;

  const out = html`
  <div tw="flex flex-col w-full h-full items-center justify-center"
    style="background: #cadc9f;">
    <div tw="flex w-full h-1/4 items-center">
      <div tw="flex w-full px-8" >
        <h2 tw="flex flex-col font-extrabold w-full tracking-tight"
          style="color: #8bac0f;"
        >
          <span tw="block ml-auto text-5xl" style=" 
          text-shadow: #306230 2px 0px, #306230 1px 0px,
          #306230 2px 1px, #306230 1px 1px,
          #306230 2px 2px, #306230 1px 2px,
          #306230 0px 2px, #306230 3px 3px,
          #306230 2px 3px, #306230 1px 3px,
          #306230 0px 3px;">0xF6BFB5</span>
          <span tw="block ml-auto text-3xl">トリコじかけの明け暮れ</span>
        </h2>
      </div>
    </div>
    <div tw="flex w-full h-1/2 items-center border-black">
      <h3 tw="m-auto text-8xl"
        style="display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
        padding: 0.25em; padding-top: 0;
        max-width: 95%; text-align: center;
        vertical-align: baseline;
        border: 1px solid #8bac0f; word-break: auto-phrase;
        box-shadow: 2px 2px 0 #306230, 4px 4px 0 #0f380f;
        background-color: #e5edc8;"
      >${data.title}</h3>
    </div>
    <div tw="flex flex-col w-full h-1/4 px-8 justify-between">
      <p tw="ml-auto text-2xl"
      style="color: #0f380f; max-width: 80%;
      padding: 0.25em; padding-top: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 0.9;
      ">
        ${(data as any).summary ? '▽' + (data as any).summary : ''}
      </p>
      <p tw="block ml-auto">
      ${
        new Date(data.date).getFullYear() +
        "-" +
        new Date(data.date).toLocaleDateString("en-US", { month: "2-digit", }) +
        "-" +
        new Date(data.date).toLocaleDateString("en-US", { day: "2-digit", })
      }</p>
    </div>
  </div>`

  let svg = await satori(out, {
    fonts: [
      {
        name: 'Fusion Pixel',
        data: Buffer.from(FusionPixel),
        style: 'normal'
      }
    ],
    height,
    width
  });

  const resvg = new Resvg(svg, {
    font: {
      loadSystemFonts: false
    },
    fitTo: {
      mode: 'width',
      value: width
    }
  });

  const image = resvg.render();

  return {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },

      body: image.asPng()
    }

  return new Response(
    JSON.stringify({
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },

      body: image.asPng()
    })
  )
}