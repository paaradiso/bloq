export async function load() {
  const modules = import.meta.glob('/src/posts/*.md', { query: '?raw' });
  
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const postFile = (await resolver() as any).default; // ???
      const fileName = path.split("/src/posts/")[1].slice(0, -3);

      const lines = postFile.split('\n');
      const title = lines[1]?.split(':')[1]?.trim() ?? '';
      const date = lines[2]?.split(':')[1]?.trim() ?? '';
      const content = lines.slice(4).join('\n');
      
      return {
        title,
        date,
        content,
        fileName
      };
    })
  );

  return { posts };
}
