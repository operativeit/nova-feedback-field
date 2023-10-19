import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-feedback-field', IndexField)
  app.component('detail-nova-feedback-field', DetailField)
  app.component('form-nova-feedback-field', FormField)
})
