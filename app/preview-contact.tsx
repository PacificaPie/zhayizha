import {useState} from "react";
import {ArrowUpRight,Copy} from "lucide-react";

export default function PreviewContact({lang}:{lang:"zh"|"en"}) {
  const [copied,setCopied]=useState(false);
  const en=lang==="en",email="ruoyang.zhang@yale.edu";
  const subject=en?"Pin a Wish — Preview request":"扎一扎 — 内测申请";
  const body=en?"Hi Pacifica,\n\nI’d like to try Pin a Wish.\nMy next destination: \nHow I currently organize travel saves: \n\nThank you!":"你好 Pacifica，\n\n我想体验扎一扎。\n我的下一站：\n我现在如何整理旅行收藏：\n\n谢谢！";
  return <div className="preview-contact">
    <p>{en?"Tell me where you’re heading and how you collect travel ideas. I’ll reply when there’s a preview to try.":"告诉我你的下一站，以及平时怎样收藏旅行灵感。内测准备好后，我会通过邮件回复你。"}</p>
    <a className="j-primary" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>{en?"Write a preview request":"写封邮件申请内测"}<ArrowUpRight size={16}/></a>
    <p className="preview-email"><a href={`mailto:${email}`}>{email}</a><button type="button" aria-label={en?"Copy email address":"复制邮箱地址"} onClick={async()=>{try{await navigator.clipboard.writeText(email);setCopied(true);}catch{setCopied(false);}}}><Copy size={14}/></button></p>
    <small role="status">{copied?(en?"Email address copied.":"邮箱已复制。"):(en?"Opens a draft in your email app. Nothing is sent automatically. You can also copy the address above.":"将打开你的邮件应用，由你确认发送。也可以复制上面的邮箱联系我。")}</small>
  </div>;
}
