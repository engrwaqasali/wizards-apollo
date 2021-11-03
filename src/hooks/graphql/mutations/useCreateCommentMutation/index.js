import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

import { getWizardQuery } from '../../queries/useGetWizardQuery'

const createCommentMutation = gql`
  mutation CreateComment ($commentData: comments_insert_input!) {
    insert_comments_one(object: $commentData) {
      id 
      text
      wizard_id
    }
  }
`

export function useCreateCommentMutation (mutationOptions) {
  return useMutation(createCommentMutation, {
    ...mutationOptions,
    refetchQueries: [
      getWizardQuery
    ]
  })
}
