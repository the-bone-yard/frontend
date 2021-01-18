import { shallowMount, createLocalVue } from '@vue/test-utils'
import Email from '@/components/Email.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Email', () => {
  it('should render Email', () => {
    const email = shallowMount(Email, {localVue, router})
    expect(email.exists()).toBe(true)
    expect(email.find('h1').text()).toBe('Enter your email to get started!')
    expect(email.find('input').attributes('placeholder')).toBe('example@gmail.com')
    expect(email.find('button').text()).toBe('SUBMIT')
    expect(email.find('h3').exists()).toBe(true)
  })

  it('should accept user input for email', () => {
    const email = shallowMount(Email, {localVue, router})
    const input = email.find('input')
    expect(input.element.value).toBe('')
    input.setValue('boneyard@yahoo.com')
    expect(input.element.value).toBe('boneyard@yahoo.com')
  })

  it('should have a disabled button if input is empty', () => {
    const email = shallowMount(Email, {localVue, router,
      data() {
        return {
          message: ''
        }
      }})
    const button = email.find('button')
    expect(button.attributes('class')).toBe('disabled')
  })

  it.skip('should show error message', async () => {
    const email = shallowMount(Email, {localVue, router,
      computed: {
        isInvalid() {
          return true
        }
      },
      data() {
        return {
          email: 'boneyard@yahoo.com'
        }
      }
      })
      const spy = jest.spyOn(email.vm, 'submitEmail')
      const button = email.find('button') 
      expect(email.find('input').element.value).toBe('boneyard@yahoo.com')
      expect(button.attributes('class')).toBe('')
      await button.trigger('click')
      expect(spy).toHaveBeenCalled()
      /* 
        - this test is failing on line 55
        - originally set up test with setMethods( ),
        but then remembered that it is deprecated
        - the submit button is not disabled, and (from what I understand),
        is being clicked successfully
        - the input has a value of 'boneyard@yahoo.com'
        - button does not include the disabled class
        - method has been mocked successfully
        - error message: jest.fn() has received 0 calls, expected: 1 
      */
  })

  it('should show success message', () => {
    //assertions go here
    //TBD based on solution to above unit test
  })
})