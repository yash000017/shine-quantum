import { PageHero } from '../components/ui'
import { company } from '../data/site'

const updated = 'October 2026'

function Doc({ eyebrow, title, intro, sections }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={`Last updated: ${updated}`} />
      <section className="section">
        <div className="container-x max-w-3xl space-y-10">
          <p className="text-lg text-slate-600">{intro}</p>
          {sections.map(([h, body]) => (
            <div key={h}>
              <h2 className="text-2xl">{h}</h2>
              <div className="mt-3 space-y-3 text-slate-600">{body.map((p, i) => <p key={i}>{p}</p>)}</div>
            </div>
          ))}
          <p className="text-sm text-slate-500">Contact: {company.email} · {company.address}</p>
        </div>
      </section>
    </>
  )
}

export const Privacy = () => (
  <Doc eyebrow="Legal" title="Privacy Policy"
    intro={`${company.name} ("we", "us") respects your privacy. This policy explains what information we collect through this website and how we use it.`}
    sections={[
      ['Information we collect', ['Information you give us when you use the contact or meeting request forms: your name, email address, phone number, company name, preferred meeting time and any message you write.', 'Basic technical data such as browser type and pages visited, which our hosting provider may log for security and performance.']],
      ['How we use it', ['To respond to your enquiry, schedule meetings and provide information about our services.', 'To keep the website secure and working properly. We do not sell your personal information.']],
      ['Sharing', ['We share information only with service providers that help us run the website and handle enquiries (for example hosting, form handling and scheduling tools), and where required by law.']],
      ['Client financial data', ['Information shared with us as part of an engagement is handled under a separate written agreement and confidentiality terms, not under this website policy.']],
      ['Retention and your rights', ['We keep enquiry details only as long as needed to respond and maintain business records. You may ask us to access, correct or delete your personal information by contacting us.']],
      ['Cookies', ['This website does not use advertising cookies. Third-party tools we embed in future, such as a scheduling widget, may set their own cookies and this policy will be updated accordingly.']],
      ['Changes', ['We may update this policy from time to time. The date above shows when it was last revised.']],
    ]} />
)

export const Terms = () => (
  <Doc eyebrow="Legal" title="Terms of Service"
    intro={`By using this website you agree to these terms. The website is operated by ${company.name}.`}
    sections={[
      ['Use of the website', ['The content is provided for general information about our services. You agree not to misuse the site, attempt unauthorised access or interfere with its operation.']],
      ['No professional advice', ['Website content is not accounting, tax, legal or investment advice. Services are provided only under a written engagement agreement that sets out scope, fees and responsibilities.']],
      ['Enquiries and meeting requests', ['Submitting a form or requesting a meeting does not create a client relationship or guarantee availability. We will confirm any meeting by email.']],
      ['Intellectual property', ['The website content, design and branding belong to ' + company.name + ' unless stated otherwise. You may not copy or reuse them without permission.']],
      ['Third-party links and tools', ['We are not responsible for the content or practices of third-party websites or tools linked from or embedded in this site.']],
      ['Limitation of liability', ['To the fullest extent permitted by law, we are not liable for any loss arising from use of, or reliance on, this website. The site is provided "as is" without warranties.']],
      ['Changes and governing law', ['We may update these terms at any time. Governing law and jurisdiction will be confirmed once our registered office details are finalised.']],
    ]} />
)
