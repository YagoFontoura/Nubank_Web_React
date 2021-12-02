import Link from 'next/link'

export function FooterLanguage() {
    return(
        <section className="FooterLanguageContainer">
             <Link href="/"   passHref><span><input type="radio" defaultChecked /> Português</span></Link>
             <Link href="/en" passHref><span><input type="radio"/> English  </span></Link>
        </section>
    )
}

