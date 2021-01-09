import { mount } from '@vue/test-utils'
import ResultsListItem from '@/components/ResultsListItem.vue'

describe('ResultsListItem', () => {
  it('renders ResultsListItem component', () => {
    const wrapper = mount(ResultsListItem, {
      provide: {
        savePark() {}
      },
      propsData: {
        result: {
          "formatted_address": "900 County Rd 1 1/2, Erie, CO 80516, United States",
          "geometry": {
              "location": {
                  "lat": 40.0562161,
                  "lng": -105.0465427
              },
              "viewport": {
                  "northeast": {
                      "lat": 40.05745227989273,
                      "lng": -105.0450476201073
                  },
                  "southwest": {
                      "lat": 40.05475262010728,
                      "lng": -105.0477472798927
                  }
              }
          },
          "name": "The Boneyard at Reliance Park",
          "opening_hours": {
              "open_now": true
          },
          "photos": [
              {
                  "height": 607,
                  "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/106196881824025023341\">A Google User</a>"
                  ],
                  "photo_reference": "ATtYBwL5wCZbBlN-woyHMxC7irkJmGCja66_3ldaM-38b3CTmdlbJl3-oReMMMdhCZ7JwYcePeE38Es4H_wCcd3-q9U67RQ09eHcTwgEF3JcljekqsKZio7TfwD7T2wsNDflNfCphOCXjlB8R25oqFb7WHGMabIcYfv1Y6ByQhZP6TtI6q0I",
                  "width": 1088
              }
          ],
          "rating": 4.4
      }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})