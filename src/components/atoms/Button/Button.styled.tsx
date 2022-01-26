import styled from 'styled-components';

// Refactor
export const Button = styled.button`
  /* Call to Action Button */
  .cta-btn {
    display: inline-block;
    position: relative;
    padding: 0.8rem $default-font-size;
    font-weight: bold;
    line-height: 1;
    z-index: 1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      height: 100%;
      left: 0;
      bottom: 0;
      z-index: -1;
      transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
    }
  }

  /* Hero Style */
  .cta-btn--hero {
    background-image: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    border-image-slice: 1;
    cursor: pointer;
    // Responsive Button hero style
    @include respond(phone) {
      background-image: none;
      border: 2px solid $secondary-color;
      -webkit-text-fill-color: $secondary-color;
    }

    &::after {
      background-image: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
      // Responsive Button hero style
      @include respond(phone) {
        background-image: none;
      }
    }

    &:hover {
      -webkit-text-fill-color: $white-color;
      text-decoration: none;
      // Responsive Button hover hero style
      @include respond(phone) {
        -webkit-text-fill-color: $secondary-color;
      }

      &::after {
        width: 100%;
      }
    }
  }

  /* Resume Style */
  .cta-btn--resume {
    color: $white-color;
    border: 2px solid $white-color;

    &::after {
      background: $white-color;
    }

    &:hover {
      color: $secondary-color;
      text-decoration: none;

      &::after {
        width: 100%;
      }
    }
  }

  /* Arrow Button */
  .up i {
    color: #272727;
  }
`;
