import { useState, useCallback } from 'react'
import { z, ZodError } from 'zod'

type FieldErrors<T> = {
  [K in keyof T]?: string[]
}

export function useFormValidation<T extends Record<string, unknown>>(schema: z.ZodObject<any>) {
  const [errors, setErrors] = useState<FieldErrors<T>>({})
  const [touched, setTouched] = useState<Set<keyof T>>(new Set())

  const validateField = useCallback((name: keyof T, value: unknown) => {
    try {
      // Get the field schema for this specific field
      const fieldSchema = schema.shape[name as string]

      if (!fieldSchema) {
        console.warn(`No schema found for field: ${String(name)}`)
        return false
      }

      // Validate just this field's value
      fieldSchema.parse(value)

      // Clear error for this field if validation passed
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })

      return true
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldError = error.issues[0]
        if (fieldError) {
          setErrors(prev => ({
            ...prev,
            [name]: [fieldError.message]
          }))
        }
      }
      return false
    }
  }, [schema])

  const setFieldTouched = useCallback((name: keyof T) => {
    setTouched(prev => new Set(prev).add(name))
  }, [])

  const isFieldTouched = useCallback((name: keyof T) => {
    return touched.has(name)
  }, [touched])

  const clearErrors = useCallback(() => {
    setErrors({})
    setTouched(new Set())
  }, [])

  const getFieldError = useCallback((name: keyof T) => {
    return errors[name]?.[0]
  }, [errors])

  const hasFieldError = useCallback((name: keyof T) => {
    return !!errors[name]
  }, [errors])

  return {
    errors,
    touched,
    validateField,
    setFieldTouched,
    isFieldTouched,
    clearErrors,
    getFieldError,
    hasFieldError,
  }
}
