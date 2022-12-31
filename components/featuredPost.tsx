import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function FeaturedPost({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className='col-12'>
      <div className="row ielm">
        <h3 className='text-3xl'>Featured</h3>
        <div className='col col-12 ml-3'>
          <h3 className="text-2xl leading-snug">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="">
            <Date dateString={date} />
          </div>
        <div>
          <div
            className=" leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
      </div>
    </div>
  )
}
