export async function load({ params }) {
    const { post } = params;
    const postFile = (await import(`../../posts/${post}.md?raw`)).default;

    const lines = postFile.split('\n');
    const title = lines[1]?.split(':')[1]?.trim() ?? '';
    const date = lines[2]?.split(':')[1]?.trim() ?? '';
    const content = lines.slice(4).join('\n');

    return { post, content, title, date };
}
