import Image from 'next/image'
const CardLink: React.FC<any> = ({ props }) => {
  return (
    <>
      <div className="my-8 bg-blue-200 dark:bg-beige overflow-hidden shadow rounded-lg">
        <a href={props.url} rel="nofollow sponsored" style={{ textDecoration: 'none' }}>
          <div className="flex flex-nowrap -mb-3 p-4 sm:p-6">
            <div className="flex-none">
              <Image
                src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="flex-shrink mx-4 -mt-4 ">
              <p className="text-lg font-medium text-blue-700 dark:text-orange-link tracking-wider uppercase">
                {props.title}
              </p>
              <p className="text-sm text-blue-700 md:text-lg lg:text-sm xl:text-lg dark:text-dark-gray overflow-ellipsis overflow-hidden">
                {props.message}
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default CardLink
