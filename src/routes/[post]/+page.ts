import MarkdownIt from 'markdown-it';

export async function load({ params, fetch }) {
    const { post } = params;
    const res = await fetch(`/posts/${post}.md`);
    if (!res.ok) {
        throw new Error('Post not found');
    }
    const postFile = await res.text();

    const lines = postFile.split('\n');

    const title = lines[1]?.split(':')[1]?.trim() ?? '';
    const date = lines[2]?.split(':')[1]?.trim() ?? '';
    const content = lines.slice(4).join('\n');

    const md = new MarkdownIt();
    const renderedContent = md.render(content);

    return { post, content, title, date };
}
