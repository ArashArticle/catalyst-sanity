import { getPage } from '../../sanity/sanity-utils'

export default async function Page({ params }) {
    const page = await getPage(params.slug)

    return <div>
        {page.title}
        <p>------</p>
        {JSON.stringify(page)}
    </div>
}