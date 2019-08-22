import React from 'react';
import { Formik, Form, Field } from 'formik';
import './css/tailwind.css';

export const MapBuilder = (props) => {
  // Make a copy of passed view so that we don't mutate it:
  const view = JSON.parse(JSON.stringify(props.view))
  if (!view.resources) {
    return (<div>MapBuilder requires resource to be compiled into view.</div>)
  } else if (!view.resources[0] || !view.resources[0].schema) {
    return (<div>MapBuilder requires resource schema.</div>)
  }
  // TODO: make it work with multiple resources
  const fields = view.resources[0].schema
    ? view.resources[0].schema.fields
    : []

  function handleSubmit(values) {
    // Prep an updated view:
    view.specType = 'tabularmap'
    view.spec = {
      infobox: values.infobox
    }
    if (values.geomField) {
      view.spec.geomField = values.geomField
    } else {
      view.spec.lonField = values.lonField
      view.spec.latField = values.latField
    }
    // Call Redux action with updated `view`:
    props.dataViewBuilderAction(view)
  }

  return (
    <div className="text-center w-full max-w-lg">
      <Formik
        initialValues={{
          lonField: fields[0].name,
          latField: fields[0].name,
          geomField: null,
          infobox: ''
        }}
        onSubmit={values => handleSubmit(values)}
        render={({ values, setFieldValue }) => (
          <Form className="bg-white">

            <div className="flex flex-wrap -mx-3 mb-2">

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="lonField" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Longitude field</label>
                <div className="relative">
                  <Field name="lonField" component="select" placeholder="Longitude field" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {fields.map((field, index) => {
                      return <option value={field.name} key={`lonField${index}`}>{field.name}</option>
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="latField" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Latitude field</label>
                <div className="relative">
                  <Field name="latField" component="select" placeholder="Latitude field" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {fields.map((field, index) => {
                      return <option value={field.name} key={`latField${index}`}>{field.name}</option>
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label htmlFor="infobox" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Infobox</label>
                <div className="relative">
                  <Field name="infobox" type="text" placeholder="My popup: ${data.fieldName}" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/3"></div>
              <div className="w-1/3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add map
                </button>
              </div>
              <div className="md:w-1/3"></div>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
