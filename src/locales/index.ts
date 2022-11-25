import { createI18nContext } from '@solid-primitives/i18n'

const dict = {
  en: {
    hey: 'Hey',
    im: "I'm yellosea",
    yellowsea: 'yellowsea',
    info: {
      1: 'Front-end  developer.',
      2: 'Currently still looking for a job.',
      3: 'I like making interesting projects.',
    },
  },
  zhCN: {
    hey: '嗨',
    im: '我是yellowsea',
    yellowsea: 'yellowsea',
    info: {
      1: '前端开发者。',
      2: '目前还在求职中。',
      3: '我喜欢做有趣的项目。',
    },
  },
}

const i18nValue = createI18nContext(dict, 'en')

export default i18nValue
