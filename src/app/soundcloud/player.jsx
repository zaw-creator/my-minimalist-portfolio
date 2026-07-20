import React from "react";

export default function SoundCloudPlayer() {
  const embedHtml = `
<div style="width: 100%; max-width: 100%; overflow: hidden;">
  <iframe width="100%" height="300" scrolling="no" frameborder="0" allow="autoplay" style="width: 100%; max-width: 100%; min-height: 300px; border: none;" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1293189178&color=%23252321&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
</div>
<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
  <a href="https://soundcloud.com/pseudo-human-942786935" title="Pseudo Human" target="_blank" style="color: #cccccc; text-decoration: none;">Pseudo Human</a>
  ·
  <a href="https://soundcloud.com/pseudo-human-942786935/moribund" title="Moribund" target="_blank" style="color: #cccccc; text-decoration: none;">Moribund</a>
</div>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
  );
}
