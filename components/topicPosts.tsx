import PostPreview from './post-preview'

export default function TopicPosts({ posts }) {
  return (
    <div className='col-12'>
      {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
  )
}
