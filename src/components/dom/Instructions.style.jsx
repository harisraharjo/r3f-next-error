import styled from 'styled-components'

export const InstructionsStyle = styled.div`
  position: absolute;
  max-width: 32rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  pointer-events: none;
  user-select: none;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  top: 2rem;
  left: 50%;
  --tw-text-opacity: 1;
  color: rgba(249, 250, 251, var(--tw-text-opacity));
`

export const InstructionsStyle1 = styled.p`
  display: none;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    display: block;
  }
`

export const InstructionsStyle2 = styled.div`
  letter-spacing: 0.05em;
`
