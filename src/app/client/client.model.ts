export class ClientViewModel {
  id: number;
  enabled: boolean;
  clientId: string;
  clientName: string;
  clientUri: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

}

export class ClientModel {
  id: number;
  enabled: boolean;
  clientId: string;
  // protocolType = 'oidc';
  // List<ClientSecret> ClientSecrets
  // requireClientSecret: boolean;
  clientName: string;
  // description: string;
  clientUri: string;
  // logoUri: string;
  // RequireConsent: boolean;
  // AllowRememberConsent: boolean;
  // AlwaysIncludeUserClaimsInIdToken: boolean;
  // List<ClientGrantType> AllowedGrantTypes
  // RequirePkce: boolean;
  // AllowPlainTextPkce: boolean;
  // AllowAccessTokensViaBrowser: boolean;
  // List<ClientRedirectUri> RedirectUris
  // List<ClientPostLogoutRedirectUri> PostLogoutRedirectUris
  // string FrontChannelLogoutUri
  // bool FrontChannelLogoutSessionRequired = true;
  // string BackChannelLogoutUri
  // bool BackChannelLogoutSessionRequired = true;
  // bool AllowOfflineAccess
  // List<ClientScope> AllowedScopes
  // int IdentityTokenLifetime = 300;
  // string AllowedIdentityTokenSigningAlgorithms
  // int AccessTokenLifetime = 3600;
  // int AuthorizationCodeLifetime = 300;
  // int? ConsentLifetime = null;
  // int AbsoluteRefreshTokenLifetime = 2592000;
  // int SlidingRefreshTokenLifetime = 1296000;
  // int RefreshTokenUsage = (int)TokenUsage.OneTimeOnly;
  // bool UpdateAccessTokenClaimsOnRefresh
  // int RefreshTokenExpiration = (int)TokenExpiration.Absolute;
  // int AccessTokenType = (int)0; // AccessTokenType.Jwt;
  // bool EnableLocalLogin = true;
  // List<ClientIdPRestriction> IdentityProviderRestrictions
  // bool IncludeJwtId
  // List<ClientClaim> Claims
  // bool AlwaysSendClientClaims
  // string ClientClaimsPrefix = "client_";
  // string PairWiseSubjectSalt
  // List<ClientCorsOrigin> AllowedCorsOrigins
  // List<ClientProperty> Properties
  // DateTime Created = DateTime.UtcNow;
  // DateTime? Updated
  // DateTime? LastAccessed
  // int? UserSsoLifetime
  // string UserCodeType
  // int DeviceCodeLifetime = 300;
  // bool NonEditable

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

}
