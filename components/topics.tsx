export default function Topics({ topics, col }) {
  console.log("Topics:",topics)
  return (
    <div className='col col-12 }'>
      <div className="row ielm">
        <h3 className='text-3xl'>Topics</h3>
        <ul className="mx-5 list-group">
        {topics.map(({ node }) => (
          <li className=""><a href={`/topics/${node.name}`}>{node.name}</a></li>
        ))}
        </ul>
      </div>
      </div>
  )
}
