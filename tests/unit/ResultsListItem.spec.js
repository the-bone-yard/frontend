import { mount } from '@vue/test-utils'
import ResultsListItem from '@/components/ResultsListItem.vue'

describe('ResultsListItem', () => {
  let wrapper;
  
  beforeEach(() => {
    const $route = {
      path: '/results/:name',
      name: 'ResultsItemDetails'
    }
    wrapper = mount(ResultsListItem, {
      mocks: {
        $route
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
  })

  it('should render ResultsListItem component', () => {
		expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('section').isVisible()).toBeTruthy();
		expect(wrapper.find('button').text()).toBe('SAVE');
  })

  it('should render the correct result data', () => {
    const getAllH1Tags = wrapper.findAll('h1');
    const getAllPTags = wrapper.findAll('p');
    const getAllBtnTags = wrapper.findAll('button');
    expect(getAllH1Tags.at(0).text()).toBe('The Boneyard at Reliance Park');
    expect(getAllH1Tags.at(1).text()).toBe('900 County Rd 1 1/2, Erie, CO 80516, United States');
    expect(getAllPTags.at(0).text()).toBe('This park is open');
    expect(getAllPTags.at(1).text()).toBe('Rating: 4.4');
    expect(getAllBtnTags.at(0).text()).toBe('SAVE');
    expect(getAllBtnTags.at(1).text()).toBe('DETAILS');
  })
})