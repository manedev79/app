import { AppViewRouteParam } from './Params/AppViewRouteParams'
import { DemoParams } from './Params/DemoParams'
import { NoteParams } from './Params/NoteParams'
import { OnboardingParams } from './Params/OnboardingParams'
import { PurchaseParams } from './Params/PurchaseParams'
import { SettingsParams } from './Params/SettingsParams'
import { SubscriptionInviteParams } from './Params/SubscriptionInviteParams'
import { UserRequestParams } from './Params/UserRequestParams'
import { RouteType } from './RouteType'

export interface RouteParserInterface {
  get demoParams(): DemoParams
  get settingsParams(): SettingsParams
  get purchaseParams(): PurchaseParams
  get onboardingParams(): OnboardingParams
  get subscriptionInviteParams(): SubscriptionInviteParams
  get userRequestParams(): UserRequestParams
  get noteParams(): NoteParams
  get appViewRouteParam(): AppViewRouteParam | undefined
  get type(): RouteType
}
