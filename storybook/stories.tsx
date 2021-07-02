import ButtonStories from '../src/components/Button/Button.stories'
import InputStories from '../src/components/Input/Input.stories'
import PaginationStories from '../src/components/Pagination/Pagination.stories'
import TextAreaStories from '../src/components/TextArea/TextArea.stories'
import RenderIfStories from '../src/components/RenderIf/RenderIf.stories'
import Text from '../src/components/Text/Text.stories'
import TextFieldStories from '../src/components/TextField/TextField.stories'
import BadgeStories from '../src/components/Badge/Badge.stories'
import BreadcrumbStories from '../src/components/Breadcrumb/Breadcrumb.stories'

const stories: any = {
  badge: BadgeStories,
  button: ButtonStories,
  breadcrumb: BreadcrumbStories,
  input: InputStories,
  pagination: PaginationStories,
  renderif: RenderIfStories,
  textarea: TextAreaStories,
  text: Text,
  textfield: TextFieldStories
}

export default stories
