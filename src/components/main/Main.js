import EmailToolbar from './email-toolbar/EmailToolbar.js'
import EmailHeader from './email-header/EmailHeader.js'
import EmailBody from './email-body/EmailBody.js'
import EmailTitle from './email-title/EmailTitle.js'
import EmailActions from './email-actions/EmailActions.js'

function Main() {
    return (
      <main className="email-view">
        <EmailToolbar />
        <article className="email-content">
          <EmailTitle />
          <EmailHeader />
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    )
}

export default Main