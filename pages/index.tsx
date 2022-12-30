import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Avatar from '../components/avatar'
import Image from 'next/image'

import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
//import base from '../styles/base.scss'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>Islay Anderson | FullStack | Liverpool</title>
      </Head>
      <Container>
      <div className='row ielm hero'>
      <div className="col col-12 col-md-3">
        <Image
          src="http://1.gravatar.com/avatar/ad3ee8cd8239eb8c02c740f0b937ffcc?s=200&d=mm&r=g"
          width={200}
          height={200}
          className="rounded-full mx-auto"
          alt="islay anderson avatar"
        />
      </div>
      <div className="col col-12 col-md-9">
        <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight ">Islay Anderson</h1>
        <p className='' >Full-stack Developer, liverpool based, 6 Years Experience<br/>
          <a href="mailto:me@islayanderson.co.uk">me@islayanderson.co.uk, </a>
          <a href="https://twitter.com/islayAnderson">Twitter.com, </a>
          <a href="https://github.com/IslayAnderson">GitHub, </a>
          <a href="https://gitlab.com/islayAnderson">GitLabs</a>
        </p>
      </div>
      </div>
      <div className='row d-flex flex-row align-items-start'>
        <div className='col-12 col-md-5'>
          <div className='ielm'>
            <p>placeholder object</p>
          </div>
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
