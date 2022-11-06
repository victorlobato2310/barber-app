import 'package:barber_app/helpers/decode_success_user_register.dart';
import 'package:barber_app/model/account_model.dart';
import 'package:barber_app/services/register_user.dart';
import 'package:faker/faker.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  final String email = Faker().internet.email();
  final String name = Faker().person.name();
  final String username = Faker().internet.userName();
  final String password = Faker().internet.password(length: 8);

  test('Should return message if StatusCode 200', () async {
    RegisterUser registerUser = RegisterUser();
    AccountModel accountModel = AccountModel(
        email: email, name: name, password: password, username: username);

    var result = await registerUser.call(accountModel);
    var decodeResult = DecodeSuccessUserRegister.fromJson(result);
    expect(decodeResult.message, isA<String>());
  });
}