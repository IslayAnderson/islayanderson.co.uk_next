import PostPreview from './post-preview'

export default function AllStories({ posts }) {
  return (
    <div className='col-12'>
      <div className="row ielm">
        <h3 className='text-3xl'>All Posts</h3>
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
      </div>
  )
}
