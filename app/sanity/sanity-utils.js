/* eslint-disable prettier/prettier */
import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: 'bjc13yha',
        dataset: 'production',
        apiVersion: '2024-09-01',
    });

    return client.fetch(groq`*[_type == "project"]{_id, _createdAt, name, "slug": slug.current, "image":image.asset->url, url, content}`)
}

export async function getPage(slug) {

    const client = createClient({
        projectId: 'bjc13yha',
        dataset: 'production',
        apiVersion: '2024-09-01',
    });


    return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{_id, _createdAt, title, "slug": slug.current, content}`, { slug })
}

export async function getPages() {

    const client = createClient({
        projectId: 'bjc13yha',
        dataset: 'production',
        apiVersion: '2024-09-01',
    });


    return client.fetch(groq`*[_type == "page"]{_id, _createdAt, title, "slug": slug.current}`)

}

