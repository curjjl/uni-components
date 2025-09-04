import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('applies correct classes', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        size: 'large',
        block: true,
        danger: true
      }
    })
    
    const button = wrapper.find('.uni-button')
    expect(button.classes()).toContain('uni-button--primary')
    expect(button.classes()).toContain('uni-button--large')
    expect(button.classes()).toContain('uni-button--block')
    expect(button.classes()).toContain('uni-button--danger')
  })
})