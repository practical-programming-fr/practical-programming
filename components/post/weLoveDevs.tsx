/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react'
interface JobListingAttributes {
  technoId?: string
  color?: string
  locale?: string
  query?: string
  items?: string
  hidePartnership?: string
  hideFooter?: string
  referralCode?: string
  class?: string
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'jobs-widget': React.DetailedHTMLProps<JobListingAttributes, HTMLElement>
    }
  }
}

const WeLoveDevs: React.FC<any> = () => (
  <div className="max-w-3xl mx-auto mt-4 divide-y-2 divide-gray-200 py-4">
    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl py-6">
      Les Jobs
    </h2>
    <jobs-widget
      color="#3b82f6"
      locale="fr"
      items="5"
      hidePartnership="false"
      hideFooter="true"
      referralCode="practicalprog"
      class="pt-8 px-2"
    ></jobs-widget>
  </div>
)

export default WeLoveDevs
