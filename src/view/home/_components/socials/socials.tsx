import { Index, Show } from 'solid-js'
import style from './socials.module.css'
import './hover.css'

interface SocialProps {
  data: {
    icon: string
    link: string
    class?: string
    text?: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`${style.link} outfit ${data.class}`}
      href={data.link}
      target="_blank"
    >
      <div>
        <div class={data.icon} />
      </div>
      <Show when={data.text}>
        <div class={style.text}>{data.text}</div>
      </Show>
    </a>
  )
}

const Socials = () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/yellowsae',
      icon: 'fa-brands fa-github',
    },
    {
      text: 'Blog',
      link: 'http://hidie.me/',
      icon: 'fa-solid fa-blog',
    },
    {
      text: '',
      link: 'https://twitter.com/yunhai0644',
      icon: 'fab fa-twitter',
      class: 'hover-twitter',
    },
    {
      text: '',
      link: 'mailto:yellowsea0644@gmail.com',
      icon: 'fa-solid fa-at',
    },
    {
      text: '',
      link: 'https://space.bilibili.com/94743092',
      icon: 'fa-brands fa-bilibili',
      class: 'hover-bilibili',
    },
    {
      text: '',
      link: 'https://t.me/hidie0644',
      icon: 'fa-brands fa-telegram',
    },
  ]

  return (
    <div id={style.socials}>
      <Index each={socialLists}>{(item) => <SocialItem data={item()} />}</Index>
    </div>
  )
}

export { Socials }
