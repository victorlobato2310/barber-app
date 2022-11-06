class DecodeSuccessUserRegister {
  final String message;

  DecodeSuccessUserRegister(this.message);

  factory DecodeSuccessUserRegister.fromJson(Map json) {
    return DecodeSuccessUserRegister(json['message']);
  }
}