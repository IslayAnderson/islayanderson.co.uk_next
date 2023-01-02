import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import TopicPosts from '../../components/topicPosts'
import { getAllPostsWithTopic, getAllPostsWithSlug, getPostAndMorePosts, getTopics } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, allPosts, posts, preview }) {
  const router = useRouter()
  const AllPosts = posts?.edges

  console.log("posts:",allPosts)
  const morePosts = AllPosts
  //const allPosts = AllPosts

  /*if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }*/

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)
  
  const allPosts = await getAllPostsWithTopic(params.slug, preview)

  console.log("gsp-posts:",[data.posts, allPosts.posts])

  return {
    props: {
      preview,
      post: data.post,
      posts:data.posts, 
      allPosts:allPosts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getTopics(true)

  return {
    paths: allPosts.edges.map(({ node }) => `/topics/${node.slug}`) || [],
    fallback: true,
  }
}
