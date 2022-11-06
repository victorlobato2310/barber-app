import 'package:barber_app/model/account_model.dart';
import 'package:barber_app/services/register_user.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () {
              RegisterUser().call(AccountModel(email: 'email', name: 'name', password: 'password', username: 'username'));
            },
            child: const Text('data'),
          ),
        ],
      ),
    );
  }
}
