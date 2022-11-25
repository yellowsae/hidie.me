/* @refresh reload */
import { render } from 'solid-js/web'
import { I18nContext } from '@solid-primitives/i18n'
import i18nValue from './locales'

import './index.css'
import './assets/font/font.css'
import App from './App'

render(
  () => (
    <I18nContext.Provider value={i18nValue}>
      <App />
    </I18nContext.Provider>
  ),
  document.getElementById('root') as HTMLElement
)
